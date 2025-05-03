import React from "react"

const templateContents = {
    "": "",
    "basic": `Предусловия:
1. 
2. 

Шаги:
1. 
2. 

Ожидаемый результат:`,
    "api": `Endpoint: 
Method: 

Headers:
1. 

Request Body:
{
}

Expected Response:
{
}

Status Code: 200`
};

function ContentTextarea({ selectedTemplate }) {
    const [content, setContent] = React.useState("");

    React.useEffect(() => {
        setContent(templateContents[selectedTemplate]);
    }, [selectedTemplate]);

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <div className="form-group">
            <textarea 
                id="content" 
                name="content" 
                required
                value={content}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}

export default ContentTextarea