from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/predict', methods=['POST'])
def predict_procedure():
    data = request.json
    
    # 这里处理焊接参数计算逻辑
    # 示例响应
    result = {
        "焊接角度": 35 + float(data.get("厚度", 0)) * 0.5,
        "峰值电流": 180 + float(data.get("厚度", 0)) * 10,
        "基值电流": 80 + float(data.get("厚度", 0)) * 5,
        "峰值丝速": 5 + float(data.get("厚度", 0)) * 0.2,
        "基值丝速": 3 + float(data.get("厚度", 0)) * 0.1,
        "峰值比例%": 60,
        "摆动速度": 2.5,
        "左侧停留": 0.2,
        "焊接速度": 2.8,
        "脉冲频率": 3.0,
        "摆动幅度": 1.5,
        "右侧停留": 0.2
    }
    
    return jsonify(result)

@app.route('/api/upload', methods=['POST'])
def upload_procedure():
    data = request.json
    # 处理上传的焊接参数
    # 这里可以添加数据验证和存储逻辑
    
    return jsonify({"status": "success", "message": "参数上传成功"})

if __name__ == '__main__':
    app.run(debug=True, port=5328)