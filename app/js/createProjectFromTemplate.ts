async function getTemplateAjax(path: string) {
    let response = await fetch(
        path,
        {method: 'get'}
    )

    return response.text()
}

async function getData(APIpath: string) {
    let data = await fetch(APIpath);
    return data.json();
}

async function populateProjectContainer(templateFileName: string, data: string) {
   let dataToInsert = await getData(data);
    console.log(dataToInsert.data);
   let insertSite = document.querySelector('#projectContainer');
   let HBTemplate = await getTemplateAjax(`app/js/templates/${templateFileName}`);
   let template: Function = Handlebars.compile(HBTemplate);
    if (dataToInsert.data.length < 1) {
        insertSite.innerHTML = 'No results!';
    } else {
        insertSite.innerHTML = template(dataToInsert);
    }
}
populateProjectContainer('projectTemplate.hbs', 'app/js/projects.json')