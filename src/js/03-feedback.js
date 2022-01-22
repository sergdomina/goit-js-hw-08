import throttle from 'lodash.throttle';

const FEEDBACK_KEY='feedback-form-state'
const formRef=document.querySelector('.feedback-form')
function initForm(){
    let persistetFilter=localStorage.getItem(FEEDBACK_KEY)
    if(persistetFilter){
        persistetFilter=JSON.parse(persistetFilter)
        Object.entries(persistetFilter).forEach(([name,value])=>{
            formRef.elements[name].value=value
        })
    }
}
initForm()
function onFormInput(event){
    let persistetFilter=localStorage.getItem(FEEDBACK_KEY)
    persistetFilter=persistetFilter ? JSON.parse(persistetFilter):{}
    persistetFilter[event.target.name]=event.target.value
    localStorage.setItem(FEEDBACK_KEY,JSON.stringify(persistetFilter))
}
formRef.addEventListener('input',throttle(onFormInput,500))
function onSubmitForm(event){
    event.preventDefault()
    const formElements= event.currentTarget.elements
    const email= formElements.email.value
    const message = formElements.message.value
    if(!email || !message){
        alert('все поля должны быть заполнены')
        return
    }
    const formData=new FormData(formRef)
    formData.forEach((value,name)=>console.log(value,name))
    event.currentTarget.reset()
    localStorage.removeItem(FEEDBACK_KEY)
}
formRef.addEventListener('submit',onSubmitForm)