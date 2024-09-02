qg("event", "product_viewed", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/ts.webp",
        "product_url:": "https://melo-test-site.netlify.app/img/ts.webp",
        "product_id": "ts_ts", 
        "product_name": "ts"});
qg("event", "product_viewed", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/speak_now.jpeg",
        "product_url:": "https://melo-test-site.netlify.app/img/speak_now.jpeg",
        "product_id": "ts_speak_now", 
        "product_name": "speak_now"});
qg("event", "product_viewed", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/red.png",
        "product_url:": "https://melo-test-site.netlify.app/img/red.png",
        "product_id": "ts_red", 
        "product_name": "red"});
qg("event", "product_viewed", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/1989.png",
        "product_url:": "https://melo-test-site.netlify.app/img/1989.png",
        "product_id": "ts_1989", 
        "product_name": "1989"});
qg("event", "product_viewed", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/reputation.jpeg",
        "product_url:": "https://melo-test-site.netlify.app/img/reputation.jpeg",
        "product_id": "ts_reputation", 
        "product_name": "reputation"});
qg("event", "product_viewed", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/lover.png",
        "product_url:": "https://melo-test-site.netlify.app/img/lover.png",
        "product_id": "ts_lover", 
        "product_name": "lover"});
qg("event", "product_viewed", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/folklore.png",
        "product_url:": "https://melo-test-site.netlify.app/img/folklore.png",
        "product_id": "ts_folklore", 
        "product_name": "fearless"});
qg("event", "product_viewed", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/evermore.png",
        "product_url:": "https://melo-test-site.netlify.app/img/evermore.png",
        "product_id": "ts_evermore", 
        "product_name": "evermore"});
qg("event", "product_purchased", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/midnights.png",
        "product_url:": "https://melo-test-site.netlify.app/img/midnights.png",
        "product_id": "ts_midnights", 
        "product_name": "midnights"});
qg("event", "product_purchased", 
    {"product_image_url": "https://melo-test-site.netlify.app/img/ttpd.jpeg",
        "product_url:": "https://melo-test-site.netlify.app/img/ttpd.jpeg",
        "product_id": "ts_ttpd", 
        "product_name": "ttpd"});



{{ product_viewed.0.product_id|default('product_id0')|kakao_variable('product_id') }}
{{ product_viewed.1.product_id|default('product_id1')|kakao_variable('product_id') }}
{{ product_viewed.2.product_id|default('product_id2')|kakao_variable('product_id') }}
{{ product_viewed.3.product_id|default('product_id3')|kakao_variable('product_id') }}
{{ product_viewed.4.product_id|default('product_id4')|kakao_variable('product_id') }}
{{ product_viewed.5.product_id|default('product_id5')|kakao_variable('product_id') }}
{{ product_viewed.6.product_id|default('product_id6')|kakao_variable('product_id') }}
{{ product_viewed.7.product_id|default('product_id7')|kakao_variable('product_id') }}
{{ product_viewed.0.product_id|default('product_id0')|kakao_variable('product_id') }}