export interface BlogPost {
  id: string;
  title: string;
  pageTitle?: string;
  slug: string;
  category: string;
  metaDescription: string;
  publishDate: string;
  featuredImage: string;
  imageAlt: string;
  content: string; // HTML content or Markdown
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "3",
    title: "The Heroes Nobody Claps For: How TEK Foundation and LAWMA Honoured Lagos Sanitation Workers",
    pageTitle: "Clean Street Heroes: TEK Foundation Honours LAWMA Workers",
    slug: "clean-street-heroes-lawma-tek-foundation",
    category: "Partnerships",
    metaDescription: "See how TEK Foundation and LAWMA celebrated Lagos sanitation workers during Project RACK, a heartfelt random acts of kindness outreach in Surulere.",
    publishDate: "2026-06-06",
    featuredImage: "/images/news/clean-street-heroes-new.jpg",
    imageAlt: "TEK Foundation and LAWMA team appreciating Lagos sanitation workers during Project RACK outreach in Surulere",
    author: "TEK Foundation",
    readTime: "4 min read",
    content: `
      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">Who Are the Clean Street Heroes</h2>
      <p class="mb-6 leading-relaxed">Every morning before Lagos wakes up properly, there is somebody already on the street sweeping, picking, clearing. You probably walked past one of them this morning and did not even look twice.</p>
      <p class="mb-6 leading-relaxed">That is exactly the problem TEK Foundation set out to fix on June 6, when we partnered with the Lagos Waste Management Authority, LAWMA, to host <a href="/our-work" class="text-gold hover:underline font-medium">Project RACK</a>, our Random Acts of Kindness initiative, at Masha and Shitta in Surulere.</p>
      <p class="mb-8 leading-relaxed">This was not your regular outreach. This time, the spotlight was on the people who keep our streets clean every single day, yet rarely get appreciated for it. We called them what they truly are, Clean Street Heroes.</p>

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">Inside <a href="/our-work" class="text-gold hover:underline font-medium">Project RACK</a></h2>
      <p class="mb-6 leading-relaxed">For one day, the sanitation workers who clear our gutters, sweep our roads, and clean up after the rest of us were the ones being celebrated. Our team showed up with gifts, words of appreciation, and most importantly, genuine human connection. We sat with them. We listened to them. We said thank you in a way many of them said nobody had ever done before.</p>
      <p class="mb-8 leading-relaxed"><a href="/our-work" class="text-gold hover:underline font-medium">Project RACK</a> is part of our larger mission to tackle poverty and food insecurity in Nigeria by building systems of dignity, not just handouts. Working alongside LAWMA on this one mattered to us because it showed what is possible when organisations come together for something bigger than themselves.</p>

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">Why This Matters to TEK Foundation</h2>
      <p class="mb-6 leading-relaxed">This is what TEK Foundation believes. Real change does not always come from grand gestures. Sometimes it comes from simply noticing the people the rest of the world overlooks, and treating them like the heroes they actually are.</p>
      <p class="mb-8 leading-relaxed">To every sanitation worker out there reading this or having this read to you, we see you. We appreciate you. Lagos would not function without you.</p>

      <hr class="my-12 border-gray-200" />
      
      <p class="mb-6 leading-relaxed font-bold text-lg text-forest text-center">If this story moved you, here is how you can be part of what we are building.</p>

      <div class="bg-forest text-white p-8 md:p-12 rounded-2xl my-12 text-center shadow-xl relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-forest opacity-10"></div>
        <div class="relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-10">
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">💚 Donate to support our ongoing community programs</h3>
              <p class="text-white/90 text-base leading-relaxed mb-4">Your donation directly funds our outreaches and community programmes.</p>
              <a href="/get-involved" class="inline-block bg-gold text-forest font-bold py-3 px-8 rounded-full hover:bg-white transition-colors">Donate Now →</a>
            </div>
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">🤝 Volunteer with us for our next outreach</h3>
              <p class="text-white/90 text-base leading-relaxed mb-4">Join our team on the ground. See the people we serve and understand firsthand why this work matters.</p>
              <a href="/get-involved" class="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-forest text-white py-3 px-8 rounded-full font-bold transition-colors">Become a Volunteer →</a>
            </div>
          </div>
          
          <div class="mt-12 pt-8 border-t border-white/20 text-center">
            <h3 class="text-gold font-bold text-xl mb-4">Follow us on our social pages to stay updated on everything we do</h3>
            <p class="text-white/90 mb-6">Follow TEK Foundation:</p>
            <div class="flex justify-center space-x-6">
              <a href="https://instagram.com/tek_foundation" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gold transition-colors font-medium">Instagram</a>
              <a href="https://linkedin.com/company/tek-foundation" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gold transition-colors font-medium">LinkedIn</a>
              <a href="https://x.com/Tek_foundation1" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gold transition-colors font-medium">X (formerly Twitter)</a>
              <a href="https://web.facebook.com/tekfoundationng/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gold transition-colors font-medium">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      
      <p class="text-center font-bold text-deep-green text-xl mt-12 italic">We don't just feed people. We nourish hope and empower futures.</p>
    `
  },
  {
    id: "1",
    title: "Food Insecurity in Nigeria: The Silent Crisis Affecting Millions — And What You Can Do About It",
    slug: "food-insecurity-in-nigeria",
    category: "Education & Awareness",
    metaDescription: "Over 25 million Nigerians face acute food insecurity. Learn what's driving the crisis, who's most affected, and how TEK Foundation is working to create change — and how you can help.",
    publishDate: "2026-03-02",
    featuredImage: "/images/news/blog-food-insecurity.jpg",
    imageAlt: "TEK Foundation volunteers distributing food packages to families in Lagos, Nigeria",
    author: "TEK Foundation",
    readTime: "7 min read",
    content: `
      <p class="lead text-xl text-gray-700 mb-8 leading-relaxed">Somewhere in Lagos tonight, a mother is rationing her last cup of rice. She has four children. She does not know what tomorrow looks like. This is not a rare story. Across Nigeria — in urban slums, farming communities, and displacement camps — millions of families are living this reality every single day.</p>

      <p class="mb-8 leading-relaxed">Food insecurity in Nigeria is one of the most pressing humanitarian crises of our time. Yet for many, it remains invisible — a problem buried in statistics, far removed from daily conversation. At TEK Foundation, we believe that awareness is the first act of change. So let's talk about it.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">What Is Food Insecurity? A Simple Explanation</h2>
      <p class="mb-6 leading-relaxed">Food insecurity means not having reliable access to enough safe, nutritious food to live an active and healthy life. It exists on a spectrum — from mild (occasionally skipping meals due to cost) to severe (going entire days without eating).</p>
      <p class="mb-6 leading-relaxed">The United Nations Food and Agriculture Organization (FAO) defines food security as existing when all people, at all times, have physical, social, and economic access to sufficient, safe, and nutritious food. When any of those conditions break down — food insecurity follows.</p>
      <p class="mb-8 leading-relaxed">In Nigeria, that breakdown is happening at a scale that demands our attention.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">Food Insecurity in Nigeria: The Numbers You Need to Know</h2>
      <p class="mb-6 leading-relaxed">Nigeria is Africa's largest economy and most populous nation. It is also home to one of the continent's most severe food security crises.</p>

      <div class="bg-forest/5 border-l-4 border-forest p-8 my-10 rounded-r-xl shadow-sm">
        <ul class="space-y-6">
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">Over 25 million Nigerians are at risk of acute food insecurity (FAO Cadre Harmonisé)</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">Nigeria ranks among the top 10 countries globally with the highest number of food-insecure people</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">Children under five are disproportionately affected, with millions suffering from acute malnutrition</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">The Northeast and Northwest regions face the highest rates, but the crisis extends into Lagos, Kano, and Port Harcourt</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">Food price inflation has pushed basic items beyond the reach of millions of low-income households</span>
          </li>
        </ul>
      </div>

      <p class="mb-8 leading-relaxed">These are not just numbers. Each figure represents a person — a child who went to school hungry, a grandmother who skipped meals so her grandchildren could eat, a father who had to choose between food and rent.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">Why Is Food Insecurity So Widespread in Nigeria?</h2>
      <p class="mb-8 leading-relaxed">Understanding the root causes of food insecurity in Nigeria is essential to addressing it effectively. The crisis is not the result of a single factor — it is the product of several interconnected challenges.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">1. Poverty and Unemployment</h3>
      <p class="mb-6 leading-relaxed">Nigeria has one of the highest rates of extreme poverty in the world, with over 80 million people living on less than $2 a day. Without stable income, families cannot consistently afford nutritious food — no matter how available it may be in the market.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">2. Rising Food Prices and Inflation</h3>
      <p class="mb-6 leading-relaxed">Nigeria has experienced severe food inflation in recent years, driven by foreign exchange instability, fuel subsidy removal, and supply chain disruptions. The cost of staples like rice, tomatoes, cooking oil, and beans has surged dramatically, making regular meals increasingly unaffordable for low-income households.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">3. Conflict and Insecurity</h3>
      <p class="mb-6 leading-relaxed">Armed conflict in the Northeast — particularly activities of insurgent groups in Borno, Adamawa, and Yobe states — has displaced millions of farmers from their land, disrupted food production, and created massive humanitarian needs. Banditry and kidnapping in the Northwest have similarly devastated agricultural communities.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">4. Climate Change and Environmental Degradation</h3>
      <p class="mb-6 leading-relaxed">Nigeria's farmers are increasingly at the mercy of unpredictable weather patterns. Floods destroy harvests in the South while droughts devastate crops in the North. Desertification in the Sahel region is gradually consuming arable land, pushing farming communities southward and creating new tensions over resources.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">5. Weak Agricultural Infrastructure</h3>
      <p class="mb-6 leading-relaxed">Despite agriculture being a cornerstone of Nigeria's economy and employing over 35% of the workforce, the sector is chronically underfunded. Poor road networks mean that produce rots before reaching markets. Lack of storage facilities results in massive post-harvest losses. Limited access to credit leaves smallholder farmers without the capital to invest in better yields.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">6. Rapid Urbanisation Without Safety Nets</h3>
      <p class="mb-8 leading-relaxed">Nigeria's cities are growing faster than they can accommodate. Rural-to-urban migration means millions of people arrive in cities like Lagos, Abuja, and Kano without stable employment or social support systems. Urban poverty is a growing driver of food insecurity — and it often goes unnoticed because it doesn't fit the traditional image of hunger.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">Who Is Most Affected?</h2>
      <p class="mb-6 leading-relaxed">While food insecurity touches many Nigerians, certain groups bear a disproportionate burden.</p>
      <p class="mb-6 leading-relaxed">Children are the most vulnerable. Malnutrition in the first 1,000 days of a child's life — from conception to age two — can permanently affect brain development, immune function, and physical growth. A child who goes hungry today may face lifelong consequences.</p>
      <p class="mb-6 leading-relaxed">Women and girls are often the last to eat in food-insecure households, sacrificing their own nutrition to feed children and spouses. Women also carry the largest burden of care when family members become ill due to malnutrition.</p>
      <p class="mb-6 leading-relaxed">Internally displaced persons (IDPs) living in camps or informal settlements frequently lack access to both food and livelihoods, making them entirely dependent on humanitarian assistance.</p>
      <p class="mb-8 leading-relaxed">Urban poor communities — in Lagos neighbourhoods like Ajegunle, Mushin, and Makoko — often fall through the cracks of humanitarian response, which typically focuses on rural or conflict-affected areas. Yet the daily food struggles in these communities are very real.</p>

      <blockquote class="border-l-4 border-gold pl-8 py-8 my-12 bg-cream/50 rounded-r-xl shadow-sm">
        <p class="italic text-2xl md:text-3xl text-deep-green font-heading leading-relaxed">"A child who goes hungry today may face lifelong consequences. Malnutrition in the first 1,000 days of life can permanently affect brain development, immune function, and physical growth."</p>
      </blockquote>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">The Hidden Cost of Hunger: Why This Affects Everyone</h2>
      <p class="mb-6 leading-relaxed">Food insecurity is not just a problem for those directly experiencing it. Its effects ripple outward across the entire society.</p>
      <ul class="list-disc pl-6 space-y-4 mb-8">
        <li class="pl-2"><strong>Economic productivity falls</strong> when people are too hungry or malnourished to work effectively. Nigeria loses billions of naira annually to the reduced productivity caused by hunger and malnutrition.</li>
        <li class="pl-2"><strong>Educational outcomes suffer</strong> when children come to school hungry. Hunger impairs concentration, memory, and learning — creating a cycle where poverty and underachievement reinforce each other across generations.</li>
        <li class="pl-2"><strong>Public health systems are strained</strong> by the diseases linked to malnutrition — anaemia, stunting, wasting, and weakened immunity that makes communities more vulnerable to preventable illnesses.</li>
        <li class="pl-2"><strong>Social stability is undermined</strong> when desperate hunger drives people toward crime, conflict, or exploitation.</li>
      </ul>
      <p class="mb-8 leading-relaxed">Addressing food insecurity, then, is not just a matter of compassion — it is a matter of national development.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">What Is Being Done? The Role of NGOs Like TEK Foundation</h2>
      <p class="mb-6 leading-relaxed">Government agencies, international organisations, and local NGOs are all working to address food insecurity in Nigeria — but the scale of the problem means there is still a vast gap between need and response.</p>
      <p class="mb-8 leading-relaxed">At TEK Foundation, we are committed to closing that gap in the communities we serve. Our approach is rooted in three convictions:</p>
      
      <div class="space-y-8 my-10">
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h4 class="font-bold text-deep-green text-xl mb-2">1. Dignity matters as much as food.</h4>
          <p class="text-gray-700 leading-relaxed">We do not just distribute meals — we ensure that every interaction with our beneficiaries honours their humanity. The way we give is as important as what we give.</p>
        </div>
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h4 class="font-bold text-deep-green text-xl mb-2">2. Sustainable solutions outlast short-term relief.</h4>
          <p class="text-gray-700 leading-relaxed">Food distribution is where we start, not where we stop. We work to connect families with longer-term solutions — skills, networks, and resources — that reduce their dependence on external support over time.</p>
        </div>
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h4 class="font-bold text-deep-green text-xl mb-2">3. Community is both the problem and the solution.</h4>
          <p class="text-gray-700 leading-relaxed">The most powerful answers to food insecurity come from within communities themselves. Our role is to support, amplify, and resource what communities are already doing — not to impose solutions from outside.</p>
        </div>
      </div>

      <p class="mb-8 leading-relaxed">Every month, our outreach teams bring food packages to families in underserved communities across Lagos. Every package is more than a meal — it is a message: You are seen. You are valued. You are not alone.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">How You Can Help</h2>
      
      <div class="bg-forest text-white p-8 md:p-12 rounded-2xl my-12 text-center shadow-xl relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-forest opacity-10"></div>
        <div class="relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-10">
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">💚 Support TEK Foundation's Work</h3>
              <p class="text-white/90 text-base leading-relaxed">Your donation directly funds food packages, outreach operations, and community programmes. Every ₦5,000 can feed a family of four for a week. Every naira counts.</p>
            </div>
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">🤝 Become a Volunteer</h3>
              <p class="text-white/90 text-base leading-relaxed">Based in Lagos and want to give your time? Our outreach team welcomes passionate volunteers who believe in treating every person with dignity and respect.</p>
            </div>
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">📢 Spread the Word</h3>
              <p class="text-white/90 text-base leading-relaxed">Share this article. Follow @tek_foundation on Instagram and LinkedIn. The more people who understand this crisis, the more people will act.</p>
            </div>
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">🏢 Partner With Us</h3>
              <p class="text-white/90 text-base leading-relaxed">If you represent a company looking to fulfil your CSR mandate with measurable community-level impact in Nigeria, we would love to explore a partnership with you.</p>
            </div>
          </div>
          
          <a href="/contact" class="inline-block bg-gold text-white font-bold py-4 px-12 rounded-full hover:bg-white hover:text-forest transition-all shadow-lg transform hover:-translate-y-1 text-lg">Get Involved Today →</a>
        </div>
      </div>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">Final Thoughts: The Change Starts Here</h2>
      <p class="mb-6 leading-relaxed">Food insecurity in Nigeria is a complex, deeply rooted crisis. It will not be solved overnight, and no single organisation can solve it alone. But every meal delivered, every family reached, every conversation started — moves the needle.</p>
      <p class="mb-6 leading-relaxed">At TEK Foundation, we show up every week because we believe that a Nigeria where no one goes to bed hungry is not a distant dream. It is a future we are building, one community at a time.</p>
      <p class="font-bold text-deep-green text-xl mt-8">And we cannot do it without you.</p>
    `
  },
  {
    id: "2",
    title: "The True Cost of Hunger: What Malnutrition Does to Nigerian Children",
    slug: "malnutrition-nigerian-children",
    category: "Education & Awareness",
    metaDescription: "Malnutrition is silently robbing millions of Nigerian children of their future. Learn what it does to a child's body and mind — and how TEK Foundation is fighting back.",
    publishDate: "2026-03-09",
    featuredImage: "/images/news/blog-aid-a-meal.jpg",
    imageAlt: "A young Nigerian child receiving food support from TEK Foundation volunteers during a community outreach in Lagos",
    author: "TEK Foundation",
    readTime: "8 min read",
    content: `
      <p class="lead text-xl text-gray-700 mb-8 leading-relaxed">A child who goes to school hungry cannot learn. A child who grows up malnourished may never reach their full potential — not because of lack of talent or ambition, but because hunger quietly stole what their developing body needed most.</p>

      <p class="mb-8 leading-relaxed">In Nigeria, this is not a hypothetical. It is happening right now, in millions of homes, in communities you may pass through every day. And unlike poverty, which is visible, malnutrition is often silent — hidden behind smiles, behind school uniforms, behind doors we never open.</p>

      <p class="mb-8 leading-relaxed">At TEK Foundation, the children we meet on our outreaches remind us constantly why this work cannot wait. This article is for anyone who wants to understand what malnutrition really does — not just to a child's body, but to their entire future.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">What Is Malnutrition? More Than Just Hunger</h2>
      <p class="mb-6 leading-relaxed">Hunger and malnutrition are related, but they are not the same thing. Hunger is the immediate feeling of not having enough food. Malnutrition is what happens to the body when that shortage continues over time — or when food is available but lacks the right nutrients.</p>
      <p class="mb-6 leading-relaxed">There are two main forms of malnutrition that affect Nigerian children:</p>
      
      <p class="mb-6 leading-relaxed"><strong>Undernutrition</strong> occurs when children do not get enough calories, protein, or essential vitamins and minerals. It shows up as stunting (being too short for one's age), wasting (being dangerously thin), and underweight — all signs that a child's body is not getting what it needs to grow.</p>
      
      <p class="mb-8 leading-relaxed"><strong>Hidden hunger</strong> (micronutrient deficiency) is more deceptive. A child may appear to be eating enough but still be severely deficient in iron, zinc, vitamin A, or iodine — nutrients invisible to the eye but critical to the brain, immune system, and physical development.</p>
      
      <p class="mb-8 leading-relaxed">Both forms are widespread in Nigeria. And both carry consequences that last far longer than childhood.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">The Scale of the Crisis in Nigeria</h2>
      <p class="mb-6 leading-relaxed">The numbers tell a story that is hard to look away from.</p>

      <div class="bg-forest/5 border-l-4 border-forest p-8 my-10 rounded-r-xl shadow-sm">
        <ul class="space-y-6">
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">Nearly 2 million Nigerian children under five suffer from severe acute malnutrition (SAM) — one of the highest numbers in the world</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">37% of Nigerian children under five are stunted — meaning they are too short for their age due to chronic undernutrition</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">7% suffer from wasting — a sign of acute, life-threatening undernutrition</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">Nigeria accounts for approximately 1 in 10 of all stunted children globally</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">Malnutrition contributes to nearly half of all child deaths under five in Nigeria</span>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-gold font-bold text-xl mt-0.5">•</span>
            <span class="text-gray-800 font-medium text-lg">The Northeast and Northwest geopolitical zones bear the heaviest burden, but Lagos and other urban centres are far from immune</span>
          </li>
        </ul>
      </div>

      <p class="mb-8 leading-relaxed">These are not statistics from a distant conflict zone. Many of these children live within the same cities as Nigeria's growing middle class — just in the neighbourhoods that are less visible, less discussed, and less served.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">What Malnutrition Actually Does to a Child</h2>
      <p class="mb-8 leading-relaxed">This is the part most people do not fully understand. Malnutrition is not just about being thin or weak. Its damage runs deeper — and much of it is permanent.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">It Shrinks the Brain</h3>
      <p class="mb-6 leading-relaxed">The most devastating effect of malnutrition is on brain development. The brain grows faster in the first 1,000 days of life — from conception to a child's second birthday — than at any other time. During this window, the brain needs a steady supply of protein, iron, zinc, iodine, and essential fatty acids.</p>
      <p class="mb-6 leading-relaxed">When those nutrients are consistently missing, brain cells do not form properly. Neural connections that should develop simply do not. The damage is not dramatic — there is no moment where a parent can see it happening — but the consequences emerge over time as children struggle to concentrate, learn, read, and process information.</p>
      <p class="mb-6 leading-relaxed">Studies have shown that children who experience malnutrition in their first two years of life score significantly lower on cognitive tests, even years later. The brain that should have been built, never fully was.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">It Stunts Physical Growth — Permanently</h3>
      <p class="mb-6 leading-relaxed">Stunting — being significantly shorter than average for one's age — is not just a physical measurement. It is a marker of chronic deprivation. A stunted child's bones, organs, and immune system have all been compromised by prolonged undernutrition.</p>
      <p class="mb-6 leading-relaxed">Once stunting occurs in the first two years of life, it cannot be fully reversed. A child who is stunted at age two will likely remain shorter and face health disadvantages throughout their life. They are more likely to get sick, less likely to perform well academically, and more likely to earn lower incomes as adults.</p>
      <p class="mb-6 leading-relaxed">The cycle does not stop there. Stunted girls who grow into stunted women are more likely to give birth to low-birth-weight babies — who then face the same elevated risk of malnutrition themselves. Malnutrition reproduces itself across generations.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">It Weakens the Immune System</h3>
      <p class="mb-6 leading-relaxed">A malnourished child's immune system is compromised. They are more vulnerable to common infections — diarrhoea, pneumonia, measles — which are easily managed in a well-nourished child but can become life-threatening when the body has no reserves to fight back.</p>
      <p class="mb-6 leading-relaxed">This creates a cruel cycle: malnutrition weakens immunity, infections worsen malnutrition (because a sick body cannot absorb nutrients properly), and the child spirals downward. Many of Nigeria's preventable child deaths are not caused by any single disease — they are caused by the combination of infection and a body already depleted by hunger.</p>

      <h3 class="text-xl font-bold text-forest mt-10 mb-4">It Destroys the Ability to Learn</h3>
      <p class="mb-6 leading-relaxed">Hungry children cannot focus in school. This is not a matter of willpower — it is physiology. The brain requires glucose to function, and a child who has not eaten cannot concentrate, retain information, or engage with learning the way a fed child can.</p>
      <p class="mb-8 leading-relaxed">The consequences accumulate. A child who misses key learning windows in early education falls behind peers and often never fully catches up. Lower educational attainment leads to fewer opportunities, lower earning potential, and — in many cases — the continuation of the same poverty that made their family food-insecure in the first place.</p>

      <blockquote class="border-l-4 border-gold pl-8 py-8 my-12 bg-cream/50 rounded-r-xl shadow-sm">
        <p class="italic text-2xl md:text-3xl text-deep-green font-heading leading-relaxed">"The first 1,000 days of a child's life are irreplaceable. The brain built in those days is the brain they will carry for the rest of their lives. Malnutrition during this window does not just hurt children — it robs them of who they could have become."</p>
      </blockquote>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">Why Urban Children Are Often Overlooked</h2>
      <p class="mb-6 leading-relaxed">Most conversations about malnutrition in Nigeria focus on the Northeast — the conflict-affected states where emergency levels of hunger exist and humanitarian response is most visible. That attention is absolutely warranted.</p>
      <p class="mb-6 leading-relaxed">But there is another malnutrition crisis unfolding in Nigeria's cities that receives far less attention: urban child hunger.</p>
      <p class="mb-6 leading-relaxed">In Lagos alone, millions of families live in communities like Ajegunle, Mushin, Bariga, and Makoko — areas where informal employment is unstable, food prices have risen sharply, and social safety nets are essentially non-existent. In these households, children may eat once a day. They may eat mostly carbohydrates with little protein or micronutrients. They may be present in school buildings without being mentally present — because hunger has already claimed their concentration.</p>
      <p class="mb-6 leading-relaxed">Urban malnutrition is harder to photograph than emergency camps. It does not look like crisis from the outside. But the damage it does to children is just as real.</p>
      <p class="mb-8 leading-relaxed">This is the reality TEK Foundation sees on every outreach. It is why our work is in Lagos, in communities that too often go unnoticed.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">The Economic Argument: Why Nigeria Cannot Afford to Ignore This</h2>
      <p class="mb-6 leading-relaxed">Beyond the human tragedy, malnutrition carries a devastating economic cost that affects the entire country — not just the families experiencing it.</p>
      <p class="mb-6 leading-relaxed">The World Bank estimates that malnutrition costs Nigeria approximately <strong>3–16% of its GDP annually</strong> through lost productivity, increased healthcare costs, and reduced cognitive capacity across the workforce. A generation of children who cannot reach their intellectual potential because of preventable hunger is a generation that cannot drive Nigeria's economy forward.</p>
      <p class="mb-8 leading-relaxed">Nigeria's future — its entrepreneurs, engineers, teachers, innovators — is currently sitting in classrooms across Lagos, Kano, and Port Harcourt, trying to learn on empty stomachs. The cost of feeding them is a fraction of the cost of the potential being lost.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">What TEK Foundation Is Doing About It</h2>
      <p class="mb-6 leading-relaxed">We cannot wait for policy to change before we act. While systemic solutions are needed and advocacy matters, children are hungry today — and that calls for a response today.</p>
      <p class="mb-6 leading-relaxed">At TEK Foundation, our monthly food distribution programme ensures that families in underserved Lagos communities receive nutritious food packages that make a real difference to what children eat at home. We prioritise households with young children because we understand the urgency of those early years.</p>
      <p class="mb-6 leading-relaxed">But we also know that food packages alone are not enough. Our longer-term vision includes connecting families to sustainable livelihoods, supporting mothers with nutritional knowledge, and advocating for greater investment in community-level food security programmes across Nigeria.</p>
      <p class="mb-8 leading-relaxed">Every child we reach is a child whose brain gets another chance. Whose body gets another week of nourishment. Whose future gets a little more protection.</p>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">How You Can Help Protect Nigerian Children from Malnutrition</h2>
      
      <div class="bg-forest text-white p-8 md:p-12 rounded-2xl my-12 text-center shadow-xl relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-forest opacity-10"></div>
        <div class="relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-10">
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">💚 Donate to TEK Foundation</h3>
              <p class="text-white/90 text-base leading-relaxed">Your donation directly funds food packages for families with young children in Lagos. Every ₦5,000 feeds a family of four for a week — that is seven more days of nourishment for a growing child.</p>
            </div>
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">🤝 Volunteer on Our Outreaches</h3>
              <p class="text-white/90 text-base leading-relaxed">Join our team on the ground. See the children we serve. Understand firsthand why this work matters — and help us reach more families every month.</p>
            </div>
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">📢 Share This Article</h3>
              <p class="text-white/90 text-base leading-relaxed">The more Nigerians understand what malnutrition does to children, the more pressure builds for change. Share this article with someone who needs to read it.</p>
            </div>
            <div>
              <h3 class="text-gold font-bold text-xl mb-3">🏢 Corporate Partnership</h3>
              <p class="text-white/90 text-base leading-relaxed">Help us scale. If your company has a CSR mandate focused on children, community, or food security in Nigeria, TEK Foundation is the on-the-ground partner that can turn your investment into real, measurable impact.</p>
            </div>
          </div>
          
          <a href="/contact" class="inline-block bg-gold text-white font-bold py-4 px-12 rounded-full hover:bg-white hover:text-forest transition-all shadow-lg transform hover:-translate-y-1 text-lg">Support a Child Today →</a>
        </div>
      </div>

      <hr class="my-12 border-gray-200" />

      <h2 class="text-2xl md:text-3xl font-bold text-deep-green mt-12 mb-6">Final Thoughts: Every Child Deserves a Fair Start</h2>
      <p class="mb-6 leading-relaxed">Malnutrition is not inevitable. It is not natural. It is the result of systems that have failed to protect the most vulnerable among us — and it can be reversed when we choose to act before it is too late.</p>
      <p class="mb-6 leading-relaxed">The children TEK Foundation serves did not choose the circumstances of their birth. They did not choose hunger. But they deserve every chance to grow, to learn, to become everything they are capable of being.</p>
      <p class="mb-6 leading-relaxed">That chance starts with a meal. It continues with consistency. And it is built by a community — supporters, donors, volunteers, and partners — who believe that no child in Nigeria should have their future taken away by something as preventable as hunger.</p>
      <p class="font-bold text-deep-green text-xl mt-8">We believe that. And we hope you do too.</p>
    `

  }
];
