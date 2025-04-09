import './ProcedureUploader.css';

export default function ProcedureUploader() {
  return (
    <div className="procedure-uploader-container">
      <form className="procedure-uploader-form">
        <h2 className="procedure-uploader-title">上传焊接参数</h2>
        
        {/* 基本参数部分 */}
        <div className="procedure-uploader-section">
          <h3 className="procedure-uploader-section-title">基本参数</h3>
          <div className="row-container">
            <div className="input-container">
              <label className="input-label">焊接角度</label>
              <input type="number" step="0.1" className="text-input" name="焊接角度" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">焊接速度</label>
              <input type="number" step="0.1" className="text-input" name="焊接速度" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">峰值电流</label>
              <input type="number" step="0.1" className="text-input" name="峰值电流" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">基值电流</label>
              <input type="number" step="0.1" className="text-input" name="基值电流" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">峰值丝速</label>
              <input type="number" step="0.1" className="text-input" name="峰值丝速" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">基值丝速</label>
              <input type="number" step="0.1" className="text-input" name="基值丝速" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">峰值比例%</label>
              <input type="number" step="0.1" className="text-input" name="峰值比例%" placeholder="0.0" />
            </div>
          </div>
        </div>
        
        {/* 摆动参数部分 */}
        <div className="procedure-uploader-section">
          <h3 className="procedure-uploader-section-title">摆动参数</h3>
          <div className="row-container">
            <div className="input-container">
              <label className="input-label">摆动速度</label>
              <input type="number" step="0.1" className="text-input" name="摆动速度" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">摆动幅度</label>
              <input type="number" step="0.1" className="text-input" name="摆动幅度" placeholder="0.0" />
            </div>
          </div>
          <div className="row-container">
            <div className="input-container">
              <label className="input-label">左侧停留</label>
              <input type="number" step="0.1" className="text-input" name="左侧停留" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">右侧停留</label>
              <input type="number" step="0.1" className="text-input" name="右侧停留" placeholder="0.0" />
            </div>
            <div className="input-container">
              <label className="input-label">脉冲频率</label>
              <input type="number" step="0.1" className="text-input" name="脉冲频率" placeholder="0.0" />
            </div>
          </div>
        </div>
        
        <button 
          type="button"
          className="upload-button"
        >
          上传焊接参数
        </button>
      </form>
    </div>
  );
}