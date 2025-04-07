"use client"

import "./styles.css"
import { useState } from "react";
import ProcedureDisplay from '@components/ProcedureDisplay';
import { WeldingProcedureInterface } from '@/app/utils/types';


export default function Home() {
  const [weldingData, setWeldingData] = useState<WeldingProcedureInterface | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleButtonClick = async () => {
    const formData = new FormData(document.getElementById('feature-input-form') as HTMLFormElement);

    const data = {
      材质: formData.get('material'),
      厚度: formData.get('thickness'),
      坡口角度: formData.get('bevelAngle'),
      钝边: formData.get('bluntEdge'),
      间隙: formData.get('gap'),
      直径: formData.get('diameter'),
      增透剂: formData.get('penetrant'),
    };
    console.log(JSON.stringify(data, null, 2));
    
    // 调用API
    setIsLoading(true);
    try {
      // 模拟API调用
      const response = await new Promise<{data: WeldingProcedureInterface}>((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              焊接角度: 35 + Math.random() * 5,
              峰值电流: 180 + Math.random() * 20
            }
          });
        }, 1000);
      });
      
      setWeldingData(response.data);
    } catch (error) {
      console.error("获取焊接参数失败", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      {/* Feature param input area */}
      <div>
        <form id="feature-input-form">
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
              <input type='number' step={0.1} defaultValue={0.0} name="thickness" className="text-input" />
            </div>
            <div className="input-container">
              <label className="input-label">坡口角度</label>
              <input type='number' step={0.1} defaultValue={0.0} name="bevelAngle" className="text-input" />
            </div>
          </div>
          <div className="row-container">
            <div className="input-container">
              <label className="input-label">钝边</label>
              <input type='number' step={0.1} defaultValue={0.0} name="bluntEdge" className="text-input" />
            </div>
            <div className="input-container">
              <label className="input-label">间隙</label>
              <input type='number' step={0.1} defaultValue={0.0} name="gap" className="text-input" />
            </div>
          </div>
          <div className="row-container">
            <div className="input-container">
              <label className="input-label">直径</label>
              <input type='number' step={0.1} defaultValue={0.0} name="diameter" className="text-input" />
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
      </div>

      <div className="ml-5">
        <ProcedureDisplay data={weldingData} isLoading={isLoading} />
      </div>
    </div>
  )
}