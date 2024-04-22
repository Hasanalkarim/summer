let listBg = document.querySelectorAll('.bg');
let listTab = document.querySelectorAll('.tab');
let titleBanner = document.querySelector('.banner h1');
window.addEventListener("scroll", (event) => {
    /*scrollY is the web scrollbar position (pixel)*/
    let top = this.scrollY;
    /*index is the order of classes bg (0,1,2,3,4,5,6,7,8)
    When scrolling the web, the classes bg scroll down,
    the bigger the index, the faster the movement
    */
    listBg.forEach((bg, index) => {
        if(index != 0 && index != 8){
            bg.style.transform = `translateY(${(top*index/2)}px)`;
        }else if(index == 0){
            bg.style.transform = `translateY(${(top/3)}px)`;
        }
    })
    titleBanner.style.transform = `translateY(${(top*4/2)}px)`;

    /* parallax scroll in tab
    when tab's position is less than 550 px
    from scrollbar position add active class to animate 
    and vice versa
    */
    listTab.forEach(tab =>{
        if(tab.offsetTop - top < 550){
            tab.classList.add('active');
        }else{
            tab.classList.remove('active');
        }
    })
});  










// Fetch data from JSONPlaceholder API
 
               

const cardContainer = document.getElementById('card-box');


const cardContainer2 = document.getElementById('card-box2');

const cardContainer3 = document.getElementById('img-slider-box');

         

// Function to fetch random image from Unsplash


// Generate cards with fetched data


const width = 400; // Hardcoded width
const height = 267; 
function fetchRandomImageData(count) {
    return fetch(`https://api.unsplash.com/photos/random?client_id=YQPLVskm-2hBbBDb7a-EtxXrp8KGzkIYfR-zwoLmsho&count=${count}&query=nature`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching images:', error);

            

                const slider = `
                <div id="carouselExampleCaptions2" class="carousel slide">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active img-slider">
                        <img src="img/slider1.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>Some representative placeholder content for the first slide.</p>
                        </div>
                      </div>
        
        
                      <div class="carousel-item img-slider">
                        <img src="img/slider2.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>Some representative placeholder content for the second slide.</p>
                        </div>
                      </div>
        
        
                      <div class="carousel-item img-slider">
                        <img src="img/slider3.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>Some representative placeholder content for the third slide.</p>
                        </div>
                      </div>
        
                      <div class="carousel-item img-slider">
                        <img src="img/slider4.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>Some representative placeholder content for the third slide.</p>
                        </div>
                      </div>
        
                 
        
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                        
                    `;

                    cardContainer3.innerHTML = slider;

            

            


              for (let i = 13; i < 19; i++) {
                
                
                        const card = `
                        <div class="col">
                        <div class="card">
                            <img src="img/${i}.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">TIRAMISU CAKE</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                                    dignissimos accusantium amet similique velit iste.</p>
                            </div>
                            <div class="mb-5 d-flex justify-content-around">
                                <h3>190$</h3>
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    `;
                    cardContainer2.innerHTML += card;

              }


            return null;
        });
}

// Example usage:
fetchRandomImageData(12).then(imageData => {


    for (let index = 0; index < 12; index++) {


          
        const imageUrl = imageData[index].urls.small; // URL of the image
        const title = imageData[index].description || 'Untitled'; // Title of the image (fallback to 'Untitled' if no description)
        const description = imageData[index].alt_description || 'No description available'; // Description of the image (fallback to 'No description available' if no alt_description)
    
    
        const card = `
            <div >
                <div class="card h-100" >
                    <img src="${imageUrl}" class="card-img-top img-size" alt="Image"  style="object-fit: cover;">
                    <div class="card-body">
                    <p class="card-text">${description}</p>
                        <h5 class="card-title">${title}</h5>
                      
                    </div>
                </div>
            </div>
        `;
        cardContainer.innerHTML += card;

    
        
    }




  
});

   



 
    