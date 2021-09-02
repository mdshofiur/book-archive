

/*  Data fetch start here */

const bookApi  = ()=>{
const  search_input = document.getElementById('search-input');
const value = search_input.value;
search_input.value = '';
fetch(`https://openlibrary.org/search.json?q=${value}`)
.then(response => response.json())
.then(data => allBook(data.docs,data.numFound))

}


           /*  Data setup Start  Here  */

        const allBook = (bookData,numfound) => {

            const total_reult = document.getElementById('total_reult');
            total_reult.innerText = numfound;

            if(total_reult.innerText === '0' || total_reult.innerText === '') {
                const no_result = document.getElementById('no_result');
                no_result.innerText = 'No Result Found'
                search_result.textContent ='';

            } else {
              no_result.innerText = '';
              const search_result = document.getElementById('search_result');
              search_result.textContent ='';
              
      
              bookData.forEach(dataBook => {
  
             const bookName = dataBook.title
             const authorName = dataBook.author_name
             const publisherName = dataBook.publisher
             const publishYear = dataBook.publish_year
             dataBook.publish_year? dataBook.publish_year: "Not Available"
  
             const div = document.createElement('div');
             div.classList.add('col');
             const imageurl = `https://covers.openlibrary.org/b/id/${dataBook.cover_i}-M.jpg`
             div.innerHTML = `
             <div class="card h-100">
              <img height="250px" src="${imageurl}" class="card-img-top" alt="...">
              <div class="card-body">
               <h4 class="card-title text-primary">Book Name:  ${bookName}</h4>
                <h5 class="card-title">Author Name: ${authorName}</h5>
                <p class="card-text">Publisher Name:  ${publisherName}</p>
                <p class="card-text text-danger">Publish Date:  ${publishYear}</p>
              </div>
            </div>
             `
              search_result.appendChild(div);
       }) 
            }

           
}









// 