from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/products')
def products():
    return render_template("product.html")

@app.route('/cart')
def cart():
    return "Cart Page"

@app.route('/about')
def about():
    return "About Us Page"

if __name__ == '__main__':
    app.run(debug=True)
