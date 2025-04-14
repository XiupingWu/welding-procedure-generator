from procedureGenerator import WeldingProcedureGenerator
from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/predict', methods=['POST'])
def predict_procedure():
    
    data = request.json
    generator = WeldingProcedureGenerator();
    result = generator.generate(data);
    # 这里处理焊接参数计算逻辑
    # 示例响应
    return result

@app.route('/api/upload', methods=['POST'])
def upload_procedure():
    data = request.json
    # 处理上传的焊接参数
    # 这里可以添加数据验证和存储逻辑
    return jsonify({"status": "success", "message": "参数上传成功"})


if __name__ == "__main__":
    app.run(port=5328)
