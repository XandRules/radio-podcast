import { createServer, Model } from 'miragejs';

createServer({

    models: {
        podcast: Model
    },

    seeds(server: any) {
        server.db.loadData({
            podcasts: [
                {
                    id: '94.7',
                    title: 'HIPSTERS PONTO TECH',
                    description: 'Podcast de tecnologia da Alura',
                    img: 'https://i1.wp.com/hipsters.tech/wp-content/uploads/2016/07/hipsters-logo.png?ssl=1'
                },
                {
                    id: '97.7',
                    title: 'SCUBA PONTODEV',
                    description: 'Podcast de tecnologia da Alura',
                    img: 'https://www.scuba.dev.br/wp-content/uploads/2020/10/logo-blue-squared-PNG.png'
                },
                {
                    id: '101.1',
                    title: 'FALA DEV',
                    description: 'Podcast de tecnologia da Rocketseat',
                    img: 'https://i.scdn.co/image/51d62ddf26c8e15ce7e8789419da664dd89f21a4'
                },
                {
                    id: '103.5',
                    title: 'FLOW PODCAST',
                    description: 'Podcast sobre finanças e economia.',
                    img: 'https://yt3.ggpht.com/ytc/AKedOLTRC7isqWtHvGP6fjW1R6nU4rqoCgJqItLaoHtZIw=s900-c-k-c0x00ffffff-no-rj'
                },
                {
                    id: '105.2',
                    title: 'OS SÓCIOS',
                    description: 'Podcast sobre finanças e economia.',
                    img: 'https://i.scdn.co/image/ee4401c880ce2aa06ddbe82d7512244edeeb9f45'
                },
                {
                    id: '107.3',
                    title: 'JOTA JOTA PODCAST',
                    description: 'Podcast sobre desenvolvimento pessoal.',
                    img: 'https://i.scdn.co/image/029d9ff1c5c76420a647cdf731321e463bd806b5'
                }
            ],
        });
    },

    routes() {  
        this.namespace = 'api';

        this.get('/podcasts', () => {
            return this.schema.all('podcast')
        });
    }
})