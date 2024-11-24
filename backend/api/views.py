from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from transformers import ViTFeatureExtractor, AutoModelForImageClassification
from PIL import Image
import torch
import os

# Initialize model and feature extractor (outside the view to avoid reloading every time)
extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = AutoModelForImageClassification.from_pretrained("chriamue/bird-species-classifier")

@csrf_exempt
def predict_bird_species(request):
    # Check if the request method is POST and if there's a file in the request
    if request.method == 'POST' and request.FILES.get('image'):
        # Get the uploaded file from the request
        image_file = request.FILES['image']

        # Save the file temporarily
        image_path = os.path.join('media', 'uploaded_image.jpg')
        with open(image_path, 'wb') as f:
            for chunk in image_file.chunks():
                f.write(chunk)

        # Open the image using PIL
        image = Image.open(image_path).convert("RGB")

        # Preprocess the image using the ViT feature extractor
        inputs = extractor(images=image, return_tensors="pt", padding=True)

        # Perform a forward pass through the model to get logits
        with torch.no_grad():
            outputs = model(**inputs)

        # Get the predicted class index from the logits
        logits = outputs.logits
        predicted_class_idx = logits.argmax(-1).item()

        # Retrieve the class labels from the model's configuration
        labels = model.config.id2label  # A dictionary mapping index to label

        # Retrieve the predicted class label if available
        predicted_class = labels[predicted_class_idx] if labels else predicted_class_idx

        # Clean up the saved file
        os.remove(image_path)

        # Return the prediction as a JSON response
        return JsonResponse({'predicted_class': predicted_class})

    # Return an error response if no image is provided or invalid request
    return JsonResponse({'error': 'No image provided or invalid request'}, status=400)
