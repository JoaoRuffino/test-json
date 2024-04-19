

fetch("names_deptos.json")
    .then((response) => response.json())
    .then((json) => {
        function retornaJson(json) {
            let newJson = [];
            json.data.forEach(element => {
                let department = { "name": element.name, "dataElements": [] };
                element.dataElements.forEach(e => {
                    department.dataElements.push({ "name": e.name });
                });
                newJson.push(department);
            });
            return newJson;
        }

        let newJson = retornaJson(json);
        console.log(newJson);
    });



