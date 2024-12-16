from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
from io import StringIO
import contextlib
import traceback

app = Flask(__name__)
CORS(app)

def run_code_safely(code):
    # Çıktıyı yakalamak için StringIO kullan
    output = StringIO()
    error_output = StringIO()
    
    try:
        with contextlib.redirect_stdout(output), \
             contextlib.redirect_stderr(error_output):
            
            # Kodu güvenli bir şekilde çalıştır
            exec(code)
            
        return {
            'output': output.getvalue(),
            'error': error_output.getvalue() or None
        }
    except Exception as e:
        return {
            'output': output.getvalue(),
            'error': f"{str(e)}\n{traceback.format_exc()}"
        }

@app.route('/api/run', methods=['POST'])
def run_code():
    code = request.json.get('code', '')
    
    if not code:
        return jsonify({
            'error': 'Kod boş olamaz'
        }), 400
    
    result = run_code_safely(code)
    
    if result['error']:
        return jsonify({
            'output': result['output'],
            'error': result['error']
        }), 400
    
    return jsonify({
        'output': result['output'],
        'error': None
    })

if __name__ == '__main__':
    app.run(debug=True)