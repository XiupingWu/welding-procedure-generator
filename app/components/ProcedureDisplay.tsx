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
        <div className="parameter">
          <span className="parameter-label">基值电流:</span>
          <span className="parameter-value">{predictProcedure.基值电流.toFixed(1)}A</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">峰值丝速:</span>
          <span className="parameter-value">{predictProcedure.峰值丝速.toFixed(1)}m/min</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">基值丝速:</span>
          <span className="parameter-value">{predictProcedure.基值丝速.toFixed(1)}m/min</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">峰值比例%:</span>
          <span className="parameter-value">{predictProcedure['峰值比例%']}%</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">摆动速度:</span>
          <span className="parameter-value">{predictProcedure.摆动速度.toFixed(1)}mm/s</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">左侧停留:</span>
          <span className="parameter-value">{predictProcedure.左侧停留.toFixed(1)}s</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">焊接速度:</span>
          <span className="parameter-value">{predictProcedure.焊接速度.toFixed(1)}mm/min</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">脉冲频率:</span>
          <span className="parameter-value">{predictProcedure.脉冲频率.toFixed(1)}Hz</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">摆动幅度:</span>
          <span className="parameter-value">{predictProcedure.摆动幅度.toFixed(1)}mm</span>
        </div>
        <div className="parameter">
          <span className="parameter-label">右侧停留:</span>
          <span className="parameter-value">{predictProcedure.右侧停留.toFixed(1)}s</span>
        </div>
      </div>
    </div>
  );
}