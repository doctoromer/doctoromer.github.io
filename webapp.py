import bottle

app = bottle.Bottle()


@app.route('/<filename:path>')
def static_files(filename):
    return bottle.static_file(filename, root='./')


@app.route('/')
def index():
    return bottle.static_file('index.html', root='./')


def main():
    app.run()

if __name__ == '__main__':
    main()
