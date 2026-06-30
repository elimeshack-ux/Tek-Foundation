import fs from 'fs';

async function getWikiLogo() {
  const pageTitle = 'Lagos_Waste_Management_Authority';
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${pageTitle}&prop=pageimages|images&format=json&pithumbsize=1000`;
  
  console.log(`Querying Wikipedia API: ${url}`);
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));

    const pages = data.query?.pages;
    if (pages) {
      const pageId = Object.keys(pages)[0];
      const page = pages[pageId];
      if (page.thumbnail && page.thumbnail.source) {
        const logoUrl = page.thumbnail.source;
        console.log(`Found logo URL on Wikipedia: ${logoUrl}`);
        
        const logoRes = await fetch(logoUrl);
        const buffer = await logoRes.arrayBuffer();
        fs.writeFileSync('public/images/partners/lawma.png', Buffer.from(buffer));
        console.log(`Downloaded and saved Wikipedia logo of size: ${buffer.byteLength}`);
        return true;
      }
    }
  } catch (err) {
    console.error('Error fetching from Wikipedia:', err);
  }
  return false;
}

getWikiLogo();
