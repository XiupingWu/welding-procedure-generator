"use client"

import "./styles.css"
import { useState } from "react";
import ProcedureDisplay from '@components/ProcedureDisplay';
import { useProcedure } from "./store";
import ProcedureUploader from "./components/ProcedureUploader";

export default function Home() {
  const [formData, setFormData] = useState(null);
  const { fetchPredictProcedure } = useProcedure();
  
  const handleButtonClick = () => {
    const form = document.getElementById('feature-input-form') as HTMLFormElement;
    const formDataObj = new FormData(form);

    const data = {
      材质: formDataObj.get('material'),
      厚度: formDataObj.get('thickness'),
      坡口角度: formDataObj.get('bevelAngle'),
      钝边: formDataObj.get('bluntEdge'),
      间隙: formDataObj.get('gap'),
      直径: formDataObj.get('diameter'),
      增透剂: formDataObj.get('penetrant'),
    };
    
    console.log(JSON.stringify(data, null, 2));
    setFormData(data);
    fetchPredictProcedure(data);
  };

  return (
    <div className="page-container">
      {/* 左侧参数生成表单 */}
      <div className=" px-2">
        <form id="feature-input-form">
          <h2 className="form-title">焊接参数生成</h2>
          <div>
            <div className="input-container">
              <label className="input-label">材质</label>
              <select name="material" className="select-input">
                <option value="碳钢">碳钢</option>
                <option value="不锈钢">不锈钢</option>
              </select>
            </div>
          </div>
          <div className="row-container">
            <div className="input-container">
              <label className="input-label">厚度</label>
              <input type='number' step={0.1} defaultValue={0.0} name="thickness" className="text-input" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">坡口角度</label>
              <input type='number' step={0.1} defaultValue={0.0} name="bevelAngle" className="text-input" placeholder="0.0" />
            </div>
          </div>
          <div className="row-container">
            <div className="input-container">
              <label className="input-label">钝边</label>
              <input type='number' step={0.1} defaultValue={0.0} name="bluntEdge" className="text-input" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">间隙</label>
              <input type='number' step={0.1} defaultValue={0.0} name="gap" className="text-input" placeholder="0.0" />
            </div>
          </div>
          <div className="row-container">
            <div className="input-container">
              <label className="input-label">直径</label>
              <input type='number' step={0.1} defaultValue={0.0} name="diameter" className="text-input" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">增透剂</label>
              <select name="penetrant" className="select-input">
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </div>
          </div>
          <button 
            type="button" 
            onClick={handleButtonClick}
            className="submit-button"
          >
            生成焊接参数
          </button>
        </form>
        <ProcedureDisplay />
      </div>

      {/* 右侧参数上传表单 */}
      <div className=" px-2">
        <ProcedureUploader />
      </div>
    </div>
  )
}