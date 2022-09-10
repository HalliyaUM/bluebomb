document.querySelector("#startButton").addEventListener('click',()=>{

    let selectFile = document.querySelector("#inputImage").files[0];

    const file = URL.createObjectURL(selectFile);

    document.querySelector(".uploadImage").src = file;

  })