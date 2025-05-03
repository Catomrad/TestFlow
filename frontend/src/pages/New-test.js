import '../styles/TestCase.css';

import ClassSelector from '../domain/test-case/ClassSelector';
import ContentTextarea from '../domain/test-case/ContentTextarea';
import DescriptionTextarea from '../domain/test-case/DescriptionTextarea';
import ModuleSelector from '../domain/test-case/ModuleSelector';
import PrioritySelector from '../domain/test-case/PrioritySelector';
import React from "react";
import StatusSelector from '../domain/test-case/StatusSelector';
import TemplateSelector from '../domain/test-case/TemplateSelector';
import TitleSelector from '../domain/test-case/TitleSelector';

function NewTest(){
    const [selectedTemplate, setSelectedTemplate] = React.useState("");

    const handleTemplateChange = (template) => {
        setSelectedTemplate(template);
    };

    return (
        <>
        <form id="testCaseForm">
            <TitleSelector />
            
            <div className='row'>
                <PrioritySelector />
                <ClassSelector />
                <ModuleSelector />
                <StatusSelector />
            </div>

            <div className='row'>
                <TemplateSelector onTemplateChange={handleTemplateChange} />
                <div className='required-time'>
                    <label>Требуемое время</label>
                    <div className='time'>
                        <input type='number' className='input-time' min={0} placeholder='0'></input><span>Д</span>
                        <input type='number' className='input-time' min={0} placeholder='0'></input><span>Ч</span>
                        <input type='number' className='input-time' min={0} placeholder='0'></input><span>М</span>
                        <input type='number' className='input-time' min={0} placeholder='0'></input><span>С</span>
                    </div>
                </div>
            </div>

            <ContentTextarea selectedTemplate={selectedTemplate} />
            <DescriptionTextarea />

            <button type="submit">Сохранить тест-кейс</button>
        </form>
        </>
    );
}

export default NewTest;