import { AbstractView } from '../../common/view.js';
import { Header } from '../../components/header/header.js';
import onChange from 'on-change';

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('Search books');
    }

    appStateHook(path) {
        if (path === 'favorites') {
            console.log(path);
        }
    }

    render() {
        const main = document.createElement('div');
        main.innerHTML = `Number of books: ${this.appState.favorites.length}`;
        this.app.innerHTML = '';
        this.renderHeader();
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
