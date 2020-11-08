const insertSite = document.querySelector('#projectInfo');

function getProjectID() {
    let pageUrl = window.location.href;
    return pageUrl.split('#')[1];
}

async function displayProject() {
    let projectID = getProjectID();
    let data = await getData('app/js/projects.json');
    console.log(data);
    let hbTemplate = await getTemplateAjax('app/js/templates/projectInfo.hbs')
    data.data.forEach((project) => {
        if(project.id == projectID) {
            let template = Handlebars.compile(hbTemplate);
            insertSite.innerHTML = template(project);
        }
    })
}
displayProject();