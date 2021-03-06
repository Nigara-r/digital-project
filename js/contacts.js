
<script>
 const feedBack = document.querySelector('.contacts__btn');
 const modal = document.querySelector('.modal');
 const madalForm = document.querySelector('.modal__form');
 const modalClose = document.querySelector('.modal__close');
 const modalBtn = document.querySelector('modal__btn');
 const modalThanks = document.querySelector('.modal__thanks');
 const modalCheckbox = document.querySelector('#modal-checkbox');
 const modalBack = document.querySelector('.modal-thanks__btn');

feedBack.addEventListener('click', function ()  {
    modal.style.display = 'flex';

    modalForm.addEventListener('submit', function (e) {
     e.preventDefault();
     
     

    const name = modalForm.name.value;
    const phone = madalForm.phone.value;
    const email = modalForm.email.value;
    const product = modalForm.product.value;
    const description = modalForm.description.value;
   

    if (name && phone && email && product && description !== '') {
    if (modalCheckbox.checked) {
        modalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        modalThanks.style.display = 'flex';
         });
       }  
    else {
     alert('Пожалуйста,примите политику конфиденциальности !!!');
    }
    }
    else {
      alert('Пожалуйста, заполните ВСЕ поля !!!');
       }
    });

    modalBack.addEventListener('click', function (e) {
    modalThanks.style.display = 'none';

     modalForm.name.value = '';
     madalForm.phone.value = '';
     modalForm.email.value = '';
     modalForm.product.value = '';
     modalForm.description.value = '';
    });
 });

modalClose.aadEventListener('click', function (e)  {
    modal.style.display = 'none';
});


window.addEventListener('keypress', function (e)  {
   if (e.key === 'Enter') {
       modal.style.display = 'none';
   }
});
</script>
