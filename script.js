var output = document.getElementById('output')
var inputnume_F = document.getElementById('inputnume_F')
var inputprice_F = document.getElementById('inputprice_F')
var inputurl_F = document.getElementById('inputurl_F')
var inputseller_F = document.getElementById('inputseller_F')
var floatingTextarea2 = document.getElementById('floatingTextarea2')
var cancal_FP = document.getElementById('cancal_FP')

/*var count = 0;

function addProduct() {

    if (count == 0) {
        count++
        let BigG = document.createElement('div')
        BigG.classList.add("row")

            let Head = document.createElement('div')
            Head.classList.add("modal-header")
                let H5 = document.createElement('h5')
                H5.classList.add("modal-title")
                H5.innerHTML=`Add Product`
                Head.appendChild(H5)

                let 
        
        <div class="col-12 form-bar" id="output_a">
                        <div class="row">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"aria-label="Close" id="cancal_FP"></button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <input type="text" class="form-control" placeholder="Flower's name" id="inputnume_F">
                            </div>
                            <div class="col-3">
                                <input type="text" class="form-control" placeholder="Flower's price" id="inputprice_F">
                            </div>
                            <div class="col-3">
                                <input type="text" class="form-control" placeholder="Flower's URL" id="inputurl_F">
                            </div>
                            <div class="col-3">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username"aria-describedby="basic-addon1" id="inputseller_F">
                                </div>
                            </div>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"style="height: 100px"></textarea>
                            <label for="floatingTextarea2">description</label>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cancal_FP">Cancel</button>
                            <button type="button" class="btn btn-primary">Post Product</button>
                        </div>
                    </div>
        
        
    }
    if (count == 1) {
        

    }
}

document.getElementById('new_product').addEventListener('click', addProduct)

function close_form() {
    document.getElementById('output_a').remove()
    count = 0;
}

cancal_FP.addEventListener('click', close_form)
*/

//card


function card(){
    let Allmight = document.createElement('div')
    Allmight.classList.add("col-4")

        let one = document.createElement('div')
        one.classList.add("card")

            let img = document.createElement('img')
            img.classList.add("card-img-top")
            let imgname = inputurl_F.value
            img.setAttribute( 'src' , imgname)
        
            let inone = document.createElement('div')
            inone.classList.add("card-body")
                let H5 = document.createElement('h5')
                H5.classList.add("card-title")
                let name = inputnume_F.value
                H5.innerHTML = name
                inone.appendChild(H5)

                let Pd = document.createElement('p')
                Pd.classList.add("card-text")
                let descript = floatingTextarea2.value
                Pd.innerHTML = descript
                inone.appendChild(Pd)

                let Po = document.createElement('p')
                Po.classList.add("card-text")
                let owner = inputseller_F.value
                Po.innerHTML = `Seller : @${owner}`
                inone.appendChild(Po)

                let Ps = document.createElement('p')
                Ps.classList.add("card-text")
                let Pirce = inputprice_F.value
                Ps.innerHTML = `<small class="text-muted">${Pirce} ฿</small>`
                inone.appendChild(Ps)

            one.appendChild(img)
            one.appendChild(inone)
        Allmight.appendChild(one)
    output.appendChild(Allmight)
}

document.getElementById('Post_p').addEventListener("click",card)