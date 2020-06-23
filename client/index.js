const fname = document.querySelector('#fname')
const lname = document.querySelector('.lname')
const dob = document.querySelector('.dob')
const gender = document.querySelector('.gender')
const age = document.querySelector('.age')
const married = document.querySelector('.married')
const bloodgroup = document.querySelector('.bloodgroup')
const horoscope = document.querySelector('.horoscope')
const nata = document.querySelector('.nata')
const file = document.querySelector('.file')
const btnSubmit = document.querySelector('.submit')

let img = []
let imgs = []

const output = document.getElementById('output');
const outputtwo = document.getElementById('outputtwo');
if (window.FileList && window.File && window.FileReader) {
    document.getElementById('file-selector').addEventListener('change', event => {
        output.src = '';
        status.textContent = '';
        const file = event.target.files[0];
        console.warn(file)

        if (!file.type) {
            status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
            return;
        }
        if (!file.type.match('image.*')) {
            status.textContent = 'Error: The selected file does not appear to be an image.'
            return;
        }
        const reader = new FileReader();
        reader.addEventListener('load', event => {
            img.push(event.target.result);
            output.src = event.target.result;
        });
        reader.readAsDataURL(file);
    });
}

axios.get('http://localhost:8000/person/')
    .then(function (response) {
        console.log(response.data[0].person_Image);

        imgs.push(response.data[1].person_Image)
        console.log(imgs)

        var image = new Image();
        image.src = imgs[0];
        document.body.appendChild(image);
    })
    .catch(function (error) {
        console.log(error);
    });





btnSubmit.addEventListener('click', () => {
    const firstname = fname.value
    const lastname = lname.value
    const dateofbirth = dob.value
    const genders = gender.value
    const ages = age.value
    const marrieds = married.value
    const bloodgroupss = bloodgroup.value
    const horoscopes = horoscope.value
    const natas = nata.value

    console.log(img[0])





    axios({
        method: 'post',
        url: 'https://miroz.herokuapp.com/person',
        data: {
            "person_Image": img[0],
            "FirstName": firstname,
            "LastName": lastname,
            "DateOfBirth": dateofbirth,
            "Gender": genders,
            "Age": ages,
            "Married": marrieds,
            "BloodGroup": bloodgroupss,
            "Horoscope": horoscopes,
            "Nata": natas
        },


    }).then(response => {
        console.log(response)
    })
        .catch(error => {
            console.log(error.response)
        });


})

//try handlebars from brad traversy next 


