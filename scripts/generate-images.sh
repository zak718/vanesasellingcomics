#!/bin/bash

# OpenAI Image Generation Script for VanesaSellingComics
# Uses gpt-image-1 (DALL-E 3) for high quality comic-style images

# Get API key from environment variable
OPENAI_KEY="${OPENAI_API_KEY}"
if [ -z "$OPENAI_KEY" ]; then
    echo "Error: OPENAI_API_KEY environment variable not set"
    exit 1
fi
OUTPUT_DIR="/opt/sites/vanessa-selling-comics/public/images/generated"

generate_image() {
    local prompt="$1"
    local filename="$2"

    echo "Generating: $filename"
    echo "Prompt: $prompt"

    response=$(curl -s https://api.openai.com/v1/images/generations \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $OPENAI_KEY" \
      -d "{
        \"model\": \"gpt-image-1\",
        \"prompt\": \"$prompt\",
        \"n\": 1,
        \"size\": \"1536x1024\"
      }")

    # Extract URL from response
    url=$(echo "$response" | jq -r '.data[0].url // .data[0].b64_json // empty')

    if [ -z "$url" ]; then
        echo "Error generating image. Response:"
        echo "$response" | jq .
        return 1
    fi

    # Check if it's base64 or URL
    if [[ "$url" == http* ]]; then
        curl -s "$url" -o "$OUTPUT_DIR/$filename"
    else
        echo "$url" | base64 -d > "$OUTPUT_DIR/$filename"
    fi

    echo "Saved: $OUTPUT_DIR/$filename"
    echo "---"
}

echo "=== VanesaSellingComics Image Generation ==="
echo "Output directory: $OUTPUT_DIR"
echo ""

# Image 1: Hero Banner
generate_image "Vibrant comic book style illustration of a friendly comic book collector's shop. Stacks of vintage comic books, bright yellow and red colors, bold black outlines, halftone dot patterns, POW and BAM style text bubbles. Warm inviting atmosphere. Professional banner image, wide aspect ratio. No text." "hero-banner.png"

# Image 2: We Buy Comics
generate_image "Comic book art style illustration showing hands exchanging cash for a stack of vintage comic books. Bold colors yellow red and blue, thick black outlines, retro pop art style. Money and comics transaction. Exciting dynamic composition. No text in image." "we-buy-comics.png"

# Image 3: Tony Profile
generate_image "Friendly comic book style portrait of a smiling male comic book dealer in his 40s, wearing a casual shirt, surrounded by comic books. Warm personality, trustworthy appearance. Bold comic art style with thick outlines and vibrant colors. Pop art aesthetic. No text." "tony-profile.png"

# Image 4: Long Boxes Collection
generate_image "Comic book art illustration of multiple white comic book long boxes stacked together, some open showing colorful vintage comics inside. Collector's treasure trove feeling. Bold pop art style, bright colors, thick black outlines. Professional product shot style. No text." "comic-collection.png"

# Image 5: Service Area Map
generate_image "Stylized comic book art map of the northeastern United States highlighting New York, New Jersey, Pennsylvania, and Maryland. Bold colors, comic style with thick outlines, stars marking major cities. Retro travel poster meets comic book aesthetic. No text labels." "service-area-map.png"

echo ""
echo "=== Generation Complete ==="
ls -la "$OUTPUT_DIR"
