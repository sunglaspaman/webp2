export async function fetchImages(anim) {

    const response = await fetch(
        `https://shibe.online/api/${anim}?count=10&urls=true&httpsUrls=true`
        
    );
    const data = await response.json();
    return data;
  }