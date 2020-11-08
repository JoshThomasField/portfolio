async function populateProjectContainer(templateFileName: string, data: string) {
   let dataToInsert = await getData(data);
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