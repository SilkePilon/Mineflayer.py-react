try:
    import os
    from opendeliverybot.bot import MinecraftBot
    from flask import Flask, send_from_directory, render_template
    from flask import jsonify
    from flask_cors import CORS, cross_origin
    import javascript
    from javascript import require
    Authflow, Titles  = require('prismarine-auth')
    
    global allow
    allow = False

    global MSA
    MSA = False
    
    app = Flask(__name__, static_folder='build', template_folder="build")

    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'




    ## API ROUTES ----------------------------------------------------------------

    @app.route('/api/v1/login')
    def API_login():
        global config
        config = {
        "server_ip": "jogar.pxbroficial.com.br",
        "server_port": "25565",
        "bot_name": "silke2007minecraft@gmail.com",
        "password": "",
        "auth": "microsoft",
        "version": "1.12",
        "check_timeout_interval": 20,
        "armor_manager": True,
        "viewer_ip": "127.0.0.1",
        "viewer_port": "5001",
        "chest_type": None,
        "chest_coords": [
            "-62",
            "72",
            "47"
        ],
        "items_name": "ShulkerBox",
        "items_count": 1,
        "chest_range": "10",
        "quit_on_low_health": False,
        "low_health_threshold": 10
        }
        global account
        account = MinecraftBot(config=config)
        account.start()
        global allow
        allow = True
        return {'status': "ok"}

    @app.route('/api/v1/msa')
    def API_settings():
        msa_status = False
        time.sleep(6)
        if account.bot.username != None:
            print(account.bot.username)
            return {'user_code': "200"}
            msa_status = True
        while msa_status == False:
            
            try:
                if account.msa_data['user_code'] != False:
                    return account.msa_data
                    msa_status = True
                    break
            except:
                continue
        mcbot.start()
        
    
    @app.route('/api/v1/status')
    def status():
        return {'status': f"{MSA}"}


    @app.route('/api/v1/full')
    def API_username():
        if allow == True:
            # Initialize count
            total_items = 0 
            # Loop through inventory slots
            
            return jsonify({'bot': f'{account.bot}','username': f"{account.bot.username}", "ping": account.bot._client.latency, "coords": f"{account.coordinates()}", "totalitems": f"{total_items}", "version": f"{account.bot.version}", "host": f"{config['server_ip']}", "health": account.bot.health})
        else:
            return jsonify({'username': "Not logged in"})



    ## FRONTEND ROUTES -----------------------------------------------------------
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path != "" and os.path.exists(app.static_folder + '/' + path):
            return send_from_directory(app.static_folder, path)
        else:
            return render_template('index.html')


    if __name__ == '__main__':
        app.run(use_reloader=False, port=5000, threaded=True, host="0.0.0.0")
except:
    account.stop()