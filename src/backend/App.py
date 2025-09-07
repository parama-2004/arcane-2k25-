from flask import Flask, request, jsonify
from flask_cors import CORS
import razorpay
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# ⚡ Replace with your Razorpay Test Keys
RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_SECRET")

razorpay_client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))


@app.route("/create_order", methods=["POST"])
def create_order():
    try:
        data = request.get_json()
        amount = int(data.get("amount", 500)) * 100  # in paise
        currency = "INR"

        order = razorpay_client.order.create(dict(amount=amount, currency=currency, payment_capture="1"))
        return jsonify({"order": order, "key_id": RAZORPAY_KEY_ID})
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/verify_payment", methods=["POST"])
def verify_payment():
    try:
        data = request.get_json()
        razorpay_order_id = data["razorpay_order_id"]
        razorpay_payment_id = data["razorpay_payment_id"]
        razorpay_signature = data["razorpay_signature"]

        params_dict = {
            "razorpay_order_id": razorpay_order_id,
            "razorpay_payment_id": razorpay_payment_id,
            "razorpay_signature": razorpay_signature,
        }

        razorpay_client.utility.verify_payment_signature(params_dict)

        return jsonify({"status": "Payment Verified"})
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(port=5000, debug=True)
