const products = [
    {
        "category": "office",
        "colors": [
            "#ff0000",
            "#00ff00",
            "#0000ff"
        ],
        "company": "marcos",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 1,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "name": "accent chair",
        "price": 25999,
        "shipping": true
    },
    {
        "category": "living room",
        "colors": [
            "#000",
            "#ffb900"
        ],
        "company": "liddy",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 2,
        "image": "https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52",
        "name": "albany sectional",
        "price": 109999
    },
    {
        "category": "kitchen",
        "colors": [
            "#ffb900",
            "#0000ff"
        ],
        "company": "liddy",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 3,
        "image": "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f",
        "name": "albany table",
        "price": 309999
    },
    {
        "category": "bedroom",
        "colors": [
            "#000",
            "#00ff00",
            "#0000ff"
        ],
        "company": "marcos",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 4,
        "image": "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f",
        "name": "armchair",
        "price": 12599,
        "shipping": true
    },
    {
        "category": "dining",
        "colors": [
            "#000"
        ],
        "company": "liddy",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 5,
        "image": "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
        "name": "bar stool",
        "price": 4099,
        "shipping": true
    },
    {
        "category": "dining",
        "colors": [
            "#00ff00",
            "#0000ff",
            "#ff0000"
        ],
        "company": "ikea",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 6,
        "image": "https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960",
        "name": "dining table",
        "price": 42999,
        "shipping": true
    },
    {
        "category": "bedroom",
        "colors": [
            "#0000ff",
            "#000"
        ],
        "company": "ikea",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 7,
        "image": "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b",
        "name": "emperor bed",
        "price": 23999,
        "shipping": true
    },
    {
        "category": "living room",
        "colors": [
            "#000",
            "#ff0000"
        ],
        "company": "caressa",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "id": 8,
        "image": "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af",
        "name": "entertainment center",
        "price": 59999,
        "shipping": true
    },
    {
        "category": "office",
        "colors": [
            "#000",
            "#00ff00"
        ],
        "company": "ikea",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "id": 9,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f",
        "name": "high-back bench",
        "price": 39999,
        "shipping": true
    },
    {
        "category": "bedroom",
        "colors": [
            "#ff0000",
            "#ffb900",
            "#00ff00"
        ],
        "company": "caressa",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 10,
        "image": "https://dl.airtable.com/.attachmentThumbnails/d3174ad774fc628e1d50b77e3bec399f/1de7b97a",
        "name": "leather chair",
        "price": 20099
    },
    {
        "category": "office",
        "colors": [
            "#00ff00",
            "#0000ff"
        ],
        "company": "caressa",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 11,
        "image": "https://dl.airtable.com/.attachmentThumbnails/a2f371071cf292badbb621294758b600/ca963b31",
        "name": "leather sofa",
        "price": 99999
    },
    {
        "category": "kids",
        "colors": [
            "#ffb900",
            "#ff0000",
            "#00ff00"
        ],
        "company": "caressa",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "id": 12,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094",
        "name": "modern bookshelf",
        "price": 31999
    },
    {
        "category": "living room",
        "colors": [
            "#000"
        ],
        "company": "liddy",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 13,
        "image": "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359",
        "name": "modern poster",
        "price": 3099,
        "shipping": true
    },
    {
        "category": "living room",
        "colors": [
            "#00ff00"
        ],
        "company": "ikea",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 14,
        "image": "https://dl.airtable.com/.attachmentThumbnails/2fd8fb02cc6fa5620504de41fbb662f9/3157a507",
        "name": "shelf",
        "price": 30999
    },
    {
        "category": "living room",
        "colors": [
            "#0000ff"
        ],
        "company": "liddy",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 15,
        "image": "https://dl.airtable.com/.attachmentThumbnails/c9d46754faf94d2283e15ac3b8accb9a/a6c343c8",
        "name": "simple chair",
        "price": 109999,
        "shipping": true
    },
    {
        "category": "living room",
        "colors": [
            "#00ff00",
            "#ffb900"
        ],
        "company": "marcos",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 16,
        "image": "https://dl.airtable.com/.attachmentThumbnails/fe9d4f25fee307f6ae5b7a462b70b942/031464c4",
        "name": "sofa set",
        "price": 129999,
        "shipping": true
    },
    {
        "category": "office",
        "colors": [
            "#ffb900"
        ],
        "company": "caressa",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 17,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7",
        "name": "suede armchair",
        "price": 15999
    },
    {
        "category": "living room",
        "colors": [
            "#ff0000",
            "#00ff00"
        ],
        "company": "liddy",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "id": 18,
        "image": "https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064",
        "name": "utopia sofa",
        "price": 79999
    },
    {
        "category": "office",
        "colors": [
            "#ff0000"
        ],
        "company": "marcos",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "id": 19,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0",
        "name": "vase table",
        "price": 120999
    },
    {
        "category": "bedroom",
        "colors": [
            "#000",
            "#ffb900"
        ],
        "company": "ikea",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 20,
        "image": "https://dl.airtable.com/.attachmentThumbnails/1d692023f254ca11a3d1a3628d198081/e922a771",
        "name": "wooden bed",
        "price": 250099
    },
    {
        "category": "office",
        "colors": [
            "#000"
        ],
        "company": "ikea",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 21,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e3fa7aa6dc112c4998da18bb401bd70f/61e2fb5e",
        "name": "wooden desk",
        "price": 150999,
        "shipping": true
    },
    {
        "category": "office",
        "colors": [
            "#0000ff",
            "#00ff00"
        ],
        "company": "ikea",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "id": 22,
        "image": "https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a",
        "name": "wooden desk",
        "price": 40099
    },
    {
        "category": "kitchen",
        "colors": [
            "#ffb900",
            "#ff0000"
        ],
        "company": "caressa",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "id": 23,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5",
        "name": "wooden table",
        "price": 234999,
        "shipping": true
    }
]

module.exports = { products };