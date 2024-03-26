"use strict";(self.webpackChunkastria_docs_2=self.webpackChunkastria_docs_2||[]).push([[339],{9888:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/on-brand","metadata":{"permalink":"/articles/on-brand","source":"@site/blog/on-brand.md","title":"Generate On-Brand Corporate Headshots in Minutes by Fine-Tuning Stable Diffusion Models on Astria.ai","description":"Today, we\u2019ll demonstrate how you can generate on-brand corporate headshots of yourself, your colleagues and clients using Astria.ai. You no longer need to dress up and conduct photoshoots; we can help you create professional-looking photos for your website, newsletter, PR, social media, and more simply with the help of a few prompts.","date":"2024-03-26T13:25:58.000Z","formattedDate":"March 26, 2024","tags":[],"readingTime":11.745,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"How to Use Astria.ai\'s Multi-Pass Inference for Highly Controlled Stable Diffusion Image Generation","permalink":"/articles/multi-pass-inference"}},"content":"Today, we\u2019ll demonstrate how you can generate on-brand corporate headshots of yourself, your colleagues and clients using Astria.ai. You no longer need to dress up and conduct photoshoots; we can help you create professional-looking photos for your website, newsletter, PR, social media, and more simply with the help of a few prompts.\\r\\n\\r\\n\\r\\n# Why Are On-Brand Photographs Necessary?\\r\\n\\r\\nOn-brand photographs are important because they visually communicate a brand\'s identity and values. Companies benefit from professional headshots for several reasons:\\r\\n\\r\\n\\r\\n\\r\\n* **Projecting a Professional Image:** A polished headshot makes a strong first impression. It shows clients and potential customers that the company takes itself seriously and is invested in presenting a professional image.\\r\\n* **Building Trust and Credibility:** Seeing the faces of the people behind the company helps build trust and credibility. Potential clients feel more comfortable doing business with a company that has a human face.\\r\\n* **Enhancing Your Brand:** Headshots can be used on a company website, social media platforms, and marketing materials. Consistent, high-quality headshots contribute to a company\'s overall brand identity.\\r\\n* **Recruiting Talent:** Professional headshots on a careers page can attract qualified candidates. It shows potential employees that the company is professional and cares about its image.\\r\\n* **Boosting Employee Morale:** Investing in professional headshots can boost employee morale. It shows that the company values its employees and wants to present them in the best light.\\r\\n\\r\\n_Off-Brand Photos vs. On-Brand Photos_\\r\\n\\r\\n\\r\\n\\r\\n* **Off-brand:** Poor lighting, unprofessional attire, cluttered backgrounds, or generic stock photos that don\'t reflect the company\'s unique style.\\r\\n* **On-brand:** Photos that use the company\'s color palette, incorporate the logo subtly, and look formal in a setting that reflects the company culture (casual startup vs. traditional office).\\r\\n\\r\\nThink of on-brand photos as the building blocks of your company\'s visual story. They shape how the world perceives you, your work, and your brand\u2019s values.\\r\\n\\r\\nThe following are examples of off-brand images: walking in the park, listening to music, playing ukulele, or reading a book.\\r\\n\\r\\n\\r\\n<div style={{ display: \\"grid\\", \'grid-template-columns\': \'1fr 1fr\', gap: \'1.5rem\' }}>\\r\\n<div>\\r\\n\\r\\n![A woman walking in a park](on-brand/image6.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![A man listening to music in a park](on-brand/image5.jpg)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\nA woman walking in a park\\r\\n</div>\\r\\n<div>\\r\\nA man listening to music in a park\\r\\n</div>\\r\\n</div>\\r\\n\\r\\n\\r\\n<div style={{ display: \\"grid\\", \'grid-template-columns\': \'1fr 1fr\', gap: \'1.5rem\' }}>\\r\\n<div>\\r\\n\\r\\n\\r\\n![A woman walking in a park](on-brand/image25.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![A man listening to music in a park](on-brand/image15.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\nA man playing Ukulele\\r\\n</div>\\r\\n<div>\\r\\nA woman reading a book\\r\\n</div>\\r\\n\\r\\n</div>\\r\\n\\r\\n\\r\\n#### On-brand headshots of these same people would look something like this:\\r\\n\\r\\n<div style={{ display: \\"grid\\", \'grid-template-columns\': \'1fr 1fr\', gap: \'1.5rem\' }}>\\r\\n<div>\\r\\n\\r\\n![A woman walking in a park](on-brand/image16.png)\\r\\n</div>\\r\\n<div> \\r\\n\\r\\n![A man listening to music in a park](on-brand/image17.png)\\r\\n</div>\\r\\n</div>\\r\\n\\r\\n<div style={{ display: \\"grid\\", \'grid-template-columns\': \'1fr 1fr\', gap: \'1.5rem\' }}>\\r\\n\\r\\n<div>\\r\\n\\r\\n      \\r\\n![A woman walking in a park](on-brand/image22.png)\\r\\n\\r\\n\\r\\n</div>\\r\\n\\r\\n<div>\\r\\n\\r\\n      \\r\\n![A man listening to music in a park](on-brand/image24.png)\\r\\n\\r\\n\\r\\n</div>\\r\\n\\r\\n</div>\\r\\n\\r\\n\\r\\nNow, wouldn\u2019t it be awesome if you could generate corporate headshots like these quickly and efficiently?\\r\\n\\r\\nThat\u2019s where we, Astria.ai, come in.\\r\\n\\r\\n\\r\\n# Key Features of Astria.ai\u2019s Platform\\r\\n\\r\\nAstria.ai specializes in generating Stable Diffusion images at breakneck speed. First, you get premium results. Second, you can bring your still photographs to life. Third, our API is quick and simple to use. Our key features are:\\r\\n\\r\\n\\r\\n\\r\\n1. **Backend V1:** Currently in beta, this feature helps you to completely rewrite the original image inference and processing pipeline. See the details [here](https://docs.astria.ai/docs/features/backend-v1).\\r\\n2. **Face Inpainting:** Face inpainting will try to detect a human face in the picture, and then run a second inference on top of the detected face to improve facial features. It requires the super-resolution toggle to be turned on in order to get more pixels to work with.\\r\\n3. **Face Swap**: Face-swap uses training images to enhance resemblance to the subject.\\r\\n4. **Face ID:** This is a model adapter allowing you to generate an image while preserving identity without fine-tuning. It\u2019s been trained on only human faces.\\r\\n5. **Latent Consistency Models:** This is a combination of a scheduler and a LoRA which allows image generation in 5-6 steps, thus reducing processing time.\\r\\n6. **LoRAs:** LoRAs can be used to improve the quality of the image or deepen the desired style. We provide a [LoRA gallery](https://www.astria.ai/gallery/tunes?model_type=lora) and allow importing external LoRAs.\\r\\n7. **Multi-Controlnet:** Use this tool to get better consistency and precision. See the syntax [here](https://docs.astria.ai/docs/features/multi-controlnet).\\r\\n8. **Multi-Pass Inference:** Currently in beta, this is a unique feature that allows you to generate a background image separately from the person in the foreground.\\r\\n9. **Multi-Person Inference:** Also in beta, it is a feature that allows you to generate images with multiple people in them.\\r\\n10. **Prompt Masking:** This uses a short text to create a mask from the input image. The mask can be used to inpaint parts of the image. The most popular use cases are [product shots](https://docs.astria.ai/docs/use-cases/product-shots) and [Masked Portraits](https://docs.astria.ai/docs/use-cases/masked-portraits).\\r\\n11. **Tiled Upscale:** A beta feature to improve image resolution.\\r\\n\\r\\n\\r\\n# Step-by-Step Process to Generate On-Brand Headshots\\r\\n\\r\\n\\r\\n### **Step 1: Collecting Images**\\r\\n\\r\\nTo get started, we collected images of 4 different people from the free image websites Pixabay and Pexels.\\r\\n\\r\\n\\r\\n### **Step 2: Training**\\r\\n\\r\\nNext, we will fine-tune all the 4 subjects.\\r\\n\\r\\n![alt_text](on-brand/image18.png \\"image_tooltip\\")\\r\\n\\r\\n\\r\\n**Title:** Give an appropriate title.\\r\\n\\r\\n**Class Name:** Select the correct class name from the dropdown menu. In our example, we have 2 male models and 2 female models, so we selected accordingly.\\r\\n\\r\\n**Images:** You can upload any number between 4 and 30 images. In this case, we have:\\r\\n\\r\\n*Male Model 1*: 20 images\\r\\n*Male Model 2*: 14 images\\r\\n*Female Model 1*: 7 images\\r\\n*Female Model 2*: 6 images\\r\\n\\r\\n**Advanced Options**\\r\\n\\r\\n\\r\\n![alt_text](on-brand/image3.png \\"image_tooltip\\")\\r\\n\\r\\n\\r\\n**Base Fine-tune:** We shall be using the Realistic Vision V5.1 V5.1 (VAE) model.\\r\\n\\r\\n**Model Type:** Among Checkpoint, LoRA (BETA), LoRA + Embedding - SDXL, and FaceID (free) from the dropdown, we are choosing Checkpoint.\\r\\n\\r\\n**Steps:** We advise going with the default setting here.\\r\\n\\r\\n**Token:** The token used here is \u201cohwx\u201d. Remember to use this for all Stable Diffusion prompts as an instance token for the naming process during training. \u201cohwx\u201d is utilized as a token to associate subjects or concepts with specific identifiers during training.\\r\\n\\r\\n**Face Detection:** This tool enhances face detection for training faces for different classes. Make sure not to crop the images before uploading.\\r\\n\\r\\n**Face Correct:** This tool enhances training images when the input images are low quality or low resolution. But since it can result in over-smoothing, we have not opted for it.\\r\\n\\r\\nTo know more about the dos and don\u2019ts of AI Photoshoots, visit our [documentation](https://docs.astria.ai/docs/use-cases/ai-photoshoot/).\\r\\n\\r\\n\\r\\n### **Step 3: Creating On-Brand Images**\\r\\n\\r\\nNow that the fine-tuned models are ready, we\u2019re all set to generate some awesome headshots.\\r\\n\\r\\n\\r\\n\\r\\n![alt_text](on-brand/image21.png \\"image_tooltip\\")\\r\\n\\r\\n\\r\\n\\r\\nLet\u2019s select the fine-tuned models one-by-one, and create the corresponding on-brand headshots.\\r\\n\\r\\nClick on Fine-tune, then move to: On brand image: Pexel Woman.\\r\\n\\r\\n![alt_text](on-brand/image12.png \\"image_tooltip\\")\\r\\n\\r\\n\\r\\n**Detailed Description:** Every image will require a different prompt. See the prompts we have used below.\\r\\n\\r\\n**Negative Prompts:** This comprises the characteristics that you do _not_ want in your output images. In this case, we entered the following:\\r\\n\\r\\n\\r\\n```\\r\\nold, wrinkles, mole, blemish,(oversmoothed, 3d render) scar, sad, severe, 2d, sketch, painting, digital art, drawing, disfigured, elongated body (deformed iris, deformed pupils, semi-realistic, cgi, sketch, cartoon, drawing, anime), text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, (extra fingers, mutated hands, poorly drawn hands, poorly drawn face), mutation, deformed, (blurry), dehydrated, bad anatomy, bad proportions, (extra limbs), cloned face, disfigured, gross proportions, (malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, NSFW), nude, underwear, muscular, elongated body, high contrast, airbrushed, blurry, disfigured, cartoon, blurry, dark lighting, low quality, low resolution, cropped, text, caption, signature, clay, kitsch, oversaturated\\r\\n```\\r\\n\\r\\n\\r\\n**Model:** There are different Stable Diffusion models you can choose from. We used Realistic Vision V5.1 V5.1 (VAE).\\r\\n\\r\\n\\r\\n#### **ControlNet/Img2Img**\\r\\n\\r\\n![alt_text](on-brand/image30.png \\"image_tooltip\\")\\r\\n\\r\\n**Image URL:** This is the place to upload a reference image, or the image you would like the final output to be based on. You could also use a URL instead. In addition to the detailed description and negative prompts, the model will refer to this image while generating the new images.\\r\\n\\r\\n**Mask URL:** Image masking is used to isolate specific areas of an image from the rest, allowing for more precise editing. It\u2019s like placing a \u201cmask\u201d over the parts of a picture you want to protect or hide while exposing the other areas for editing. In this case, we have left it blank.\\r\\n\\r\\n**Prompt Strength:** This is denoising strength. If you input 1 here, it will take the prompt and ignore the reference image. We are using the default: 0.8.\\r\\n\\r\\n**ControlNet Hint:** In the dropdown you will note the following options: Pose, Depth, Tile, Line art - Edge, Canny - Edge detection, MLSD - for architecture, HED boundaries, and QR Code. We used \u2018Pose\u2019 because we are creating professional headshots.\\r\\n\\r\\n**ControlNet Conditioning Scale:** We have used the default: 0.8.\\r\\n\\r\\n**TXT2IMG:** If you want to use this instead of Img2Img, then toggle on. In our case, we have used a reference image, so it is toggled off.\\r\\n\\r\\n\\r\\n#### **Advanced**\\r\\n\\r\\n![alt_text](on-brand/image20.png \\"image_tooltip\\")\\r\\n\\r\\n\\r\\n**Color Grading:** We have 3 color grading options - Film Velvia, Film Portra, and Ektar. In this case, we\u2019ve left it blank so that the model can take the inference from the reference image.\\r\\n\\r\\n**Width:** This will set the width of the image. We have left it blank.\\r\\n\\r\\n**Height:** This will set the height of the image. We have left it blank.\\r\\n\\r\\n**Number of Images:** The number of images can be selected from among the options - 1,2,3,4, and 8. We selected 2.\\r\\n\\r\\n**Steps:** This ranges from 10 - 50. We have kept the default: 50.\\r\\n\\r\\n**Seed:** The default is 42.\\r\\n\\r\\n**Cfg Scale:** This ranges from 0-20; the default is 7.5.\\r\\n\\r\\n**Scheduler:** Among euler, euler_a, dpm++2m_karras, dpm++sde_karras, dpm__2m, dpm++sde, and lcm, the default is euler_a. We\u2019ve kept the default.\\r\\n\\r\\n**Weighted Prompts**: You can enable the weighted prompts, but in our case, it is disabled.\\r\\n\\r\\n**Film Grain:** This adds noise to the image. We toggled on.\\r\\n\\r\\n**Super Resolution (X4):** This increases the resolution. We toggled on.\\r\\n\\r\\n**Super Resolution Details:** This is used along with Super Resolution (X4). This is toggled on.\\r\\n\\r\\n**Inpaint Faces:** This improves details on faces. It is toggled on.\\r\\n\\r\\n**Face Correct:** This does face restoration. It is toggled on.\\r\\n\\r\\n**Face Swap:** This uses training images to further enhance resemblance to the subject. This is toggled off.\\r\\n\\r\\nNow let\u2019s get to the detailed descriptions. Let\u2019s see what prompts work and what headshots they generate - all of them on-brand in our case.\\r\\n\\r\\n\\r\\n#### **On-Brand Image: Legal Profession**\\r\\n\\r\\nDetailed Description for Man:\\r\\n\\r\\n\\r\\n```\\r\\nportrait of (ohwx man) wearing a lawyer suit, bookshelf background, professional photo, white background, Amazing Details, Best Quality, 80mm Sigma f/1.4 or any ZEISS lens --tiled upscale\\r\\n```\\r\\n\\r\\n\\r\\nDetailed Description for Woman:\\r\\n\\r\\n\\r\\n```\\r\\nportrait of (ohwx woman) wearing a lawyer suit, bookshelf background, professional photo, white background, Amazing Details, Best Quality, 80mm Sigma f/1.4 or any ZEISS lens --tiled upscale\\r\\n```\\r\\n\\r\\n\\r\\nImages:\\r\\n\\r\\n<div style={{ display: \\"grid\\", \'grid-template-columns\': \'1fr 1fr\', gap: \'1.5rem\' }}>\\r\\n<div>\\r\\n\\r\\n![Image 1](on-brand/image9.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 2](on-brand/image11.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 3](on-brand/image10.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 4](on-brand/image14.png)\\r\\n\\r\\n</div>\\r\\n</div>\\r\\n\\r\\n\\r\\n#### **On-Brand Image: Corporate Headshots**\\r\\n\\r\\nDetailed Description for Man:\\r\\n\\r\\n\\r\\n```\\r\\nportrait of (ohwx man) wearing a business suit, professional photo, white background, Amazing Details, Best Quality, Masterpiece, dramatic lighting highly detailed, analog photo, overglaze, 80mm Sigma f/1.4 or any ZEISS lens\\r\\n```\\r\\n\\r\\n\\r\\n\\r\\n\\r\\nDetailed Description for Woman:\\r\\n\\r\\n\\r\\n```\\r\\nportrait of (ohwx woman) wearing a business suit, businesswoman, professional photo, white background, Amazing Details, Best Quality,  80mm Sigma f/1.4 or any ZEISS lens  --tiled upscale\\r\\n```\\r\\n\\r\\n\\r\\nImages:\\r\\n\\r\\n\\r\\n<div style={{ display: \\"grid\\", \'grid-template-columns\': \'1fr 1fr\', gap: \'1.5rem\' }}>\\r\\n<div>\\r\\n\\r\\n![Image 1](on-brand/image27.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 2](on-brand/image13.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 3](on-brand/image7.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 4](on-brand/image2.png)\\r\\n\\r\\n</div>\\r\\n</div>\\r\\n\\r\\n\\r\\n#### **On-Brand Image: Healthcare**\\r\\n\\r\\nDetailed Description for Man:\\r\\n\\r\\n\\r\\n```\\r\\nportrait of (ohwx man) wearing a labcoat,smiling, hospital, intricate details, symmetrical eyes, professional photo, detailed background, detailed fingers, detailed face,  Amazing Details, Best Quality,  ZEISS lens,8k high definition  --tiled upscale\\r\\n```\\r\\n\\r\\n\\r\\nDetailed Description for Woman:\\r\\n\\r\\n\\r\\n```\\r\\nportrait of (ohwx woman) wearing a labcoat,smiling, hospital, intricate details, symmetrical eyes, professional photo, detailed background, detailed fingers, detailed face,  Amazing Details, Best Quality, ZEISS lens, 8k high definition --tiled upscale\\r\\n```\\r\\n\\r\\n\\r\\nImages:\\r\\n\\r\\n\\r\\n<div style={{ display: \\"grid\\", \'grid-template-columns\': \'1fr 1fr\', gap: \'1.5rem\' }}>\\r\\n<div>\\r\\n\\r\\n![Image 1](on-brand/image26.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 2](on-brand/image28.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 3](on-brand/image31.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 4](on-brand/image4.png)\\r\\n\\r\\n</div>\\r\\n</div>\\r\\n\\r\\n\\r\\n#### On-Brand Image: Manufacturing\\r\\n\\r\\nDetailed Description for Man:\\r\\n\\r\\n\\r\\n```text\\r\\nportrait of (ohwx man) wearing shirt and trousers,factory background, manufacturing professional,smiling, symmetrical eyes,detailed fingers, detailed hands, professional photo, Amazing Details, Best Quality, 80mm Sigma f/1.4 or any ZEISS lens --tiled upscale\\r\\n```\\r\\n\\r\\n\\r\\nDetailed Description for Woman:\\r\\n\\r\\n\\r\\n```text\\r\\nportrait of (ohwx woman) wearing shirt and trousers,manufacturing professional,smiling, symmetrical eyes,detailed fingers, detailed hands, professional photo,  Amazing Details, Best Quality,  80mm Sigma f/1.4 or any ZEISS lens --tiled upscale\\r\\n```\\r\\n\\r\\n\\r\\nImages:\\r\\n\\r\\n\\r\\n<div style={{ display: \\"grid\\", \'grid-template-columns\': \'1fr 1fr\', gap: \'1.5rem\' }}>\\r\\n<div>\\r\\n\\r\\n![Image 1](on-brand/image29.png)\\r\\n\\r\\n</div>\\r\\n\\r\\n<div>\\r\\n\\r\\n![Image 2](on-brand/image1.png)\\r\\n</div>\\r\\n\\r\\n<div>\\r\\n\\r\\n![Image 3](on-brand/image8.png)\\r\\n\\r\\n</div>\\r\\n<div>\\r\\n\\r\\n![Image 4](on-brand/image23.png)\\r\\n</div>\\r\\n</div>\\r\\n\\r\\n\\r\\n\\r\\n# To Summarize\\r\\n\\r\\nThere are several potential benefits to using Astria for corporate headshots over traditional photography shoots:\\r\\n\\r\\n\\r\\n\\r\\n* **Cost-Effectiveness:** AI-generated headshots can be significantly cheaper than hiring a professional photographer, renting a studio, and so on\\r\\n* **Scalability:** AI can generate a large number of headshots quickly and easily. This is especially beneficial for companies with a large number of employees.\\r\\n* **Customization:** With AI, you can fine-tune the generation process to create headshots that meet your specific needs. For example, you can specify the desired clothing, background, and lighting.\\r\\n* **Control over Revisions:** If you don\'t like an AI-generated headshot, you can simply generate another one. This can save time and money compared to reshooting a traditional headshot.\\r\\n* **Accessibility:** AI-generated headshots can be created from anywhere in the world, without the need to travel to a photography studio.\\r\\n\\r\\nGenerating corporate headshots is one of the many cool things you can do on our platform. Keep reading our other blogs to find out about our exciting new features."},{"id":"/multi-pass-inference","metadata":{"permalink":"/articles/multi-pass-inference","source":"@site/blog/multi-pass-inference.md","title":"How to Use Astria.ai\'s Multi-Pass Inference for Highly Controlled Stable Diffusion Image Generation","description":"How to Generate Striking Images with Astria.ai\'s Multi-Pass Inference","date":"2024-02-04T13:12:25.000Z","formattedDate":"February 4, 2024","tags":[],"readingTime":8.665,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"How to Use Astria.ai\'s Multi-Pass Inference for Highly Controlled Stable Diffusion Image Generation","description":"How to Generate Striking Images with Astria.ai\'s Multi-Pass Inference"},"prevItem":{"title":"Generate On-Brand Corporate Headshots in Minutes by Fine-Tuning Stable Diffusion Models on Astria.ai","permalink":"/articles/on-brand"}},"content":"Welcome to Astria.ai.\\n\\nIn our first blog post, we\u2019ll take a deep dive into how you can generate very detailed images using a multi-pass inference method. We\u2019ll show you how to structure high-quality prompts to generate visuals of professional quality.\\n\\n\\n## What Is Multi-Pass Inference?\\n\\nFirst, let\u2019s discuss what multi-pass inference is. Multi-pass inference is essentially a technique where you can generate the background of the composition independently from the foreground. On Astria.ai this control is achieved through multiple breaks in the prompting technique. The base image (i.e. the background elements) is generated separately via the first part of the prompt. Then using the next breaks in the prompt the subject is in-painted onto the base image.\\n\\nHere\'s how multi-pass inference enhances control over the background of an image:\\n\\n\\n### 1. Iterative Refinement\\n\\nIn a multi-pass inference, you have the opportunity to adjust and refine the background in a separate pass. This iterative process allows you to steer the image generation towards your desired outcome.\\n\\n\\n### 2. Choice over base model\\n\\nMulti-pass inference allows for choice over the base model thereby giving the users the option to use a variety of pre-trained models like Realistic Vision, Absolute Reality, and other Stable Diffusion models.\\n\\n\\n### 3. Increased Precision and Detailing\\n\\nWith multiple inference steps, you have more chances to introduce specific details or adjustments to the background. This can include changing its color scheme, adding or removing elements, or altering its overall style. Such precision is often not achievable in a single pass, where the model\'s output is more dependent on the initial prompt and less on a multi-step method.\\n\\n\\n### 4. Balancing Foreground and Background\\n\\nMulti-pass inference allows for a more balanced composition between the foreground and the background so that you can modify the background in a way that it complements the foreground elements more effectively.\\n\\nAs an example take a look at these two images of a man wearing sportswear and posing inside a gym. The first one was generated in a single prompt, while for the second one we used a multi-pass approach.\\n\\n<div style={{ display: \\"grid\\", \'grid-template-columns\': \'1fr 1fr\', gap: \'1.5rem\' }}>\\n\\n<div>\\n<figcaption>Without multi-pass</figcaption>\\n\\n![alt_text](multi-pass-inference/image7.png)\\n</div>\\n\\n<div>\\n<figcaption>With multi-pass</figcaption>\\n\\n![alt_text](multi-pass-inference/image6.png)\\n</div>  \\n\\n</div>\\n\\n\\n\\nAs you can see in the second image the background has more character to it. The elements of the gym are more prominent as compared to the former.\\n\\n\\n## How Multi-Pass Inference Can Benefit Your Business\\n\\nThe enhanced control over image backgrounds provided by multi-pass inference offers significant benefits for businesses in various domains. By precisely tailoring image backgrounds, companies can maintain a consistent visual brand identity, crucial for marketing, advertising, and establishing a strong social media presence.\\n\\nFor e-commerce and retail sectors, the background of product images plays a critical role in shaping customer perception. Tailoring these backgrounds to complement the products not only enhances their appeal but also provides clearer context, which can lead to increased sales.\\n\\nMoreover, multi-pass inference enables rapid and cost-effective creation of high-quality, bespoke images. This reduces the reliance on expensive photoshoots and graphic design work, presenting a more economical approach to content creation. Businesses can easily modify image backgrounds to suit various platforms and formats, such as social media, websites, and print media, ensuring optimal visual presentation across all channels.\\n\\nLastly, in a digital landscape overflowing with visual content, unique and tailored images with custom backgrounds provide businesses with a competitive edge. Such visuals are more likely to capture audience interest in a crowded market, standing out from standard, generic content. Therefore, the ability to control image backgrounds through multi-pass inference is not just a technical advantage but a strategic tool for branding, marketing, product presentation, and creating visually compelling content that differentiates a business in the market.\\n\\n\\n## How Astria.ai makes Multi-pass inferencing easy\\n\\nMulti-pass inferencing, particularly in the context of advanced generative models like Stable Diffusion, often requires a developer\'s expertise due to several technical complexities. At Astria.ai, we provide a user-friendly apis that can significantly simplify this process for users who do not possess extensive technical know-how.\\n\\nLet\u2019s first understand how a developer\u2019s expertise is needed and then we\u2019ll show how Astria.ai makes this process easier.\\n\\nIf one were to fine-tune and implement Stable Diffusion for multi-pass inferencing one would need a fair understanding of how these machine learning models work so that they can adjust parameters for different passes. This would require a fair amount of coding skills especially for customizing the inference process, integrating different components (like schedulers, encoders, decoders), and handling data preprocessing and postprocessing. Developers must be proficient in relevant programming languages and frameworks.\\n\\nMoreover each pass in multi-pass inferencing may require adjustments to optimize the output. Developers need to troubleshoot issues, fine-tune parameters, and experiment with different configurations to achieve the desired results, which demands both technical skills and problem-solving abilities. Lastly, generative models can be resource-intensive. Developers need to manage and optimize the use of computational resources like GPUs, especially when working with large models or high-resolution images.\\n\\nAstria.ai simplifies the above procedures by providing simple APIs that abstract the complexities of the underlying model. The platform also comes with pre-configured settings and templates showcased in the gallery that users can select from, reducing the time to do prompt engineering, and helping understand the breadth of options available. This includes predefined prompts, styles, and optimization settings. Apart from this Astria also handles the computational resource management in the background, allowing users to focus on the creative aspects of image generation without worrying about technical constraints.\\n\\nOverall, while multi-pass inferencing with AI models requires considerable technical expertise due to its complexity, a platform like Astria.ai democratizes this capability by providing easy-to-use api and automated workflows, making advanced image generation accessible to developers.\\n\\n\\n## Step-by-Step Guide to Creating Images for a Sportswear Brand Using Multi-Pass Inferencing\\n\\n### Step 1: Training\\n\\nFirst, create a fine-tune of your subject.\\n\\n![alt_text](multi-pass-inference/image10.png)\\n\\n\\nSelect the model type as LORA. This is a fast and efficient way to train the model, as it only trains an adapter layer on top of the base model, instead of training all the weights which is typically the case if we select the Checkpoint Model type.\\n\\nWe used the following images of a male model obtained from a royalty free collection (Pixabay):\\n\\n\\n![alt_text](multi-pass-inference/image4.jpg)\\n\\n\\nOnce the tune is ready, we can begin to prompt. Click on your tune.\\n\\n![alt_text](multi-pass-inference/image3.png)\\n\\n\\n### Step 2 Inference\\n\\nLet\u2019s first look at the structure of our prompt. Suppose you have to create images to market a sportswear brand.\\n\\n\\n```\\n(medium shot) of a male model wearing hiking clothes and shoes, standing in a dense forest, behind him is a small waterfall.\\nBREAK photorealistic and highly detailed\\nBREAK ohwx man wearing hiking clothes and shoes <lora:960310:1.0>\\n```\\n\\n* The first line contains the base prompt to generate the background and the overall composition.\\n* The second line is a common prompt that is added both to the base prompt and the person prompt, in order to avoid repetition.\\n* The third line is the person prompt, to detail how our subject is composed in the foreground. The statement - &lt;lora:960310:1.0> - is added to load the fine-tuned model of our subject.\\n\\n```\\nNegative Prompt: (brand logos on t-shirt), (worst quality, greyscale), watermark, username, signature, text, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, jpeg artifacts, bad feet, extra fingers, mutated hands, poorly drawn hands, bad proportions, extra limbs, disfigured, bad anatomy, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, mutated hands, fused fingers, too many fingers, long neck\\n```\\n\\n\\n\\nThe negative prompt is a list of prompts we want to avoid in our generated image. Anything placed in parentheses applies extra weights to that prompt.\\n\\nWe can add an input image if we want our generated image to follow an input template. On the ControlNet Hint dropdown menu, we can select pose, if we want to copy the pose of the subject from the input image. Select the Text2img toggle to be true, that\u2019ll preserve the pose of the image. (recommended). If you want the semantics i.e. the looks and feels of the original image as well, then go for Img2img.\\n\\nFor example, let\u2019s take this pose as our input image:\\n\\n\\n![alt_text](multi-pass-inference/image5.jpg)\\n\\n\\nAlso, keep the Inpaint Faces and Face Swap toggle on. Inpaint Faces iterates one more time over the faces of the subject to ensure that there is no distortion in the outcome, while the Face Swap option ensures that the face of our model is taken from the training images and swapped in the generated image to enhance resemblance in the final output.\\n\\nLet\u2019s look at the result of our first prompt:\\n\\n\\n![alt_text](multi-pass-inference/image8.png)\\n\\n\\nAs you can see, the ControlNet has ensured that the output pose is similar to the pose of the input image.\\n\\n### Step 3: Examples\\n\\nPrompt 2:\\n```\\na man at the finish line of a race on an olympic track\\nBREAK sharp details\\nBREAK ohwx man wearing running clothes and shoes, jubilant expression on his face&lt;lora:960310:1.0>\\n\\nNegative: anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, long neck, disfigured, fused lips,\\n```\\n\\n![alt_text](multi-pass-inference/image9.png)\\n\\n\\nPrompt 3:\\n\\n```\\nfull body workout in a vibrant gym, action, perspective, speed, movement, ripped, push ups fit\\nBREAK sharp details, realistic image, Porta 160 color, ARRI ALEXA 65\\nBREAK ohwx man doing push-ups, intense look on his face <lora:960310:1.0>\\n\\nNegative: anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, long neck, disfigured, fused lips,\\n```\\n\\n![alt_text](multi-pass-inference/image1.png)\\n\\n\\nPrompt 4:\\n(wide shot) of a man walking at night on the streets of New York, warm lighting, photorealistic\\n\\n```\\nBREAK\\nBREAK ohwx man wearing casual sports wear&lt;lora:960310:1.0>\\nNegative: hat, cartoon, ugly\\n```\\n\\n\\n\\n![alt_text](multi-pass-inference/image2.png)\\n\\n\\n\\n## Final Note\\n\\nThe above steps can be used to generate product photography or e-commerce images. With multi-pass inference, you can gain a huge amount of control over your image backgrounds vis a vis the foreground. This technique allows you to iteratively refine and tailor the background details, ensuring that they align with your vision and objectives.\\n\\nWhether you\'re looking to create images for branding, marketing, storytelling, or artistic expression, multi-pass inference by Astria.ai provides the flexibility and precision to shape the background just as you need it. You can now harness this tool to bring depth, context, and nuance to your visual content, making your image speak in harmony with your creative goals."}]}')}}]);