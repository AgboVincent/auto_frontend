import Swal from 'sweetalert2';

const toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
});


let ErrorToast = Swal.mixin({
    toast: true,
    icon: 'warning',
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    padding: '16px 16px',
    iconColor: "#fff",
    color: "#fff",
    timerProgressBar: true,
    showCloseButton: true,

    background: "#FF7770",
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

let SuccessToast = Swal.mixin({
    toast: true,
    icon: 'success',
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    padding: '16px 16px',
    iconColor: "#fff",
    color: "#fff",
    timerProgressBar: true,
    showCloseButton: true,

    background: "#2EB77A",
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

let ConfirmDialog = Swal.mixin({
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#4040FF',
    cancelButtonColor: '#d33',
})

let showComfirm = function (title, message = '', btnText = 'Yes, delete it!') {
    
    return ConfirmDialog.fire({title, text: message, confirmButtonText: btnText});
}

// eslint-disable-next-line no-unused-vars
let showError = function (title, message = '') {
    if(message?.isAxiosError && message?.response){
        message = message.response.data;
    }

    let msg = message?.message || message;

    if((msg.constructor===Array) || msg.constructor===Object) msg = Object.values(msg).join("<br/>")
    if(message.errors ) msg += '<br/>'+Object.values(message.errors).join("<br/>")
    return ErrorToast.fire({title, html: msg});
}

// eslint-disable-next-line no-unused-vars
let showSuccess = function (title,message = '', use_toast = true) {
    if(message.message) message = message.message;
    if(message.data && message.data.message) message = message.data.message;

    if((message.constructor===Array) || message.constructor===Object) message = Object.values(message).join("<br/>")
    return SuccessToast.fire({title, html: message});
}



export {
    Swal,
    showError,
    showSuccess,
    toast,
    showComfirm,
}