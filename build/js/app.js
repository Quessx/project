document.querySelector('#name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').innerHTML = data.job_title;

document.querySelector('#profile').innerHTML = data.profile

let exp = '';
experience.forEach(elem => {
    exp += `<section class="mb-5">`;
    exp += `<h4 class="company-name mb-2">${elem.exp} - ${elem.project}, <span class="italic">${elem.from} - ${elem.to}</span></h4>`
    exp += `<h5> ${elem.status}</h5>`
    exp += `<p class="mb-5">${elem.description}</p>`
});

document.querySelector('#experience').innerHTML = exp;

document.querySelector('#my-photo').src = data.photo;
document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.git}">GIT</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">Linkedin</a></li>`

document.querySelector('.address').textContent = data.address;

let skill = '';

data.skills.forEach(elem => {
    skill += `<li>${elem}</li>`
})

document.querySelector('.skill').innerHTML = skill;

ed = '';
data.education.forEach(elem => {
    ed += `<li>${elem}</li>`
})

document.querySelector('#education').innerHTML = ed;

let ach = '';
data.achievements.forEach(elem => {
    ach += `<li>${elem}</li>`
});

document.querySelector('#achievements').innerHTML = ach;