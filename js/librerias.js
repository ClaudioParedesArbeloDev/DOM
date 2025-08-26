
const btn = document.getElementById("btn");

const btn2 = document.getElementById("btn2");

btn.onclick = function(){
    Swal.fire({
        title: "Estas seguro",
        text: "No vas a poder recuperar tus datos!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#33d824a2",
        cancelButtonColor: "rgba(201, 51, 221, 1)",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
        });
  }
});
}

btn2.addEventListener("click", function(){
    Toastify({
        text: "Esto es una tostada",
        duration: 5000,
        destination: "https://www.rosario3.com",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #b0005bff, #96c93d)",
        },
        onClick: function(){console.log("ya paso")} // Callback after click
}).showToast();
});