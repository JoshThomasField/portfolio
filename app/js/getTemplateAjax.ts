async function getTemplateAjax(path: string) {
    let response = await fetch(
        path,
        {method: 'get'}
    )

    return response.text()
}
