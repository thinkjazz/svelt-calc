Хелпер отсюда https://youtu.be/I5DIcbcXzfE?t=2637

*Ищете шаблон разделяемых компонентов? Иди сюда --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

Это шаблон проекта для приложений [Svelte](https://svelte.dev). Он живет по адресу https://github.com/sveltejs/template.

Для создания нового проекта на основе этого шаблона используйте [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Пометьте, что у вас должен быть установлен [Node.js](https://nodejs.org).*


## Приступайте

Установите зависимости...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Перейдите на [localhost:5000](http://localhost:5000). Вы должны увидеть, что ваше приложение работает. Отредактируйте файл компонента в `src`, сохраните его и перезагрузите страницу, чтобы увидеть свои изменения.

По умолчанию сервер будет отвечать только на запросы localhost. Чтобы разрешить соединения с другими компьютерами, отредактируйте команды `sirv` в package.json, чтобы включить опцию `--host 0.0.0.0


## Строительство и работа в производственном режиме

Для создания оптимизированной версии прилож

```bash
npm run build
```

Вы можете запустить только что построенное приложение с `npm run start`. При этом используется [sirv](https://github.com/lukeed/sirv), который включен в ваш пакет.json's `dependencies`, так что приложение будет работать, когда вы устанавливаете его на такие платформы, как [Heroku](https://heroku.com).


## Одностраничный режим приложения

По умолчанию, sirv будет отвечать только на те запросы, которые соответствуют файлам в `публичном варианте`. Это делается для максимальной совместимости со статическими файловыми серверами, позволяя вам развернуть ваше приложение где угодно.

Если вы создаете одностраничное приложение (SPA) с несколькими маршрутами, sirv должен быть способен отвечать на запросы для *любого* пути. Вы можете сделать это, отредактировав команду `"start"` в package.json:

```js
"start": "sirv public --single"
```


## Deploying to the web

### With [now](https://zeit.co/now)

Установите  `now`  если вы еще этого не сделали:

```bash
npm install -g now
```

Затем, из папки вашего проекта:

```bash
cd public
now deploy --name my-project
```

В качестве альтернативы, используйте [Now desktop client](https://zeit.co/download) и просто перетащите распакованную папку проекта на иконку панели задач.

### With [surge](https://surge.sh/)

Установите `surge`, если вы еще этого не сделали:

```bash
npm install -g surge
```

Затем, из папки вашего проекта:

```bash
npm run build
surge public my-project.surge.sh
```
