import './ProcedureDisplay.css';
import { useProcedure } from '@/app/store';


export default function ProcedureDisplay() {
  const { isLoading, predictProcedure } = useProcedure();
  
  if (isLoading) {
    return (
      <div className="procedure-display loading">
        <div className="loading-spinner"></div>
        <p>正在生成焊接参数...</p>
      </div>
    );
  }

  if (!predictProcedure) {
    return (
      <div className="procedure-display empty">
        <p>请填写参数并点击生成按钮</p>
      </div>
    );
  }

  return (
    <div className="procedure-display">
      <h2>焊接参数</h2>
      <div className="parameter-container">
        <div className="parameter">
          <span className="parameter-label">焊接角度:</span>
          <span className="parameter-value">{predictProcedure.焊接角度.toFixed(1)}°</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">峰值电流:</span>
          <span className="parameter-value">{predictProcedure.峰值电流.toFixed(1)}A</span>
        </div>
      </div>
    </div>
  );
}