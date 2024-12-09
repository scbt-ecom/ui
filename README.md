# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Тестирование

- На проекте для unit тестирования используется vitest, документация — https://vitest.dev/
- Все тесты лежат в папке test, она полностью должно дублировать структуру папки lib, собственно, что мы и тестируем
- Снепшоты создаются также с помощью vitest, функция toMatchSnapshot(). Тут главное не нужно создавать на всё подряд их, желательно для реакт компонентов, каких-то больших и сложных объектов, конфигурационных файлов, API-ответов, сложных выходных данных
- Чтобы обновить снепшоты введите

```
npx vitest -u
```

- Скриншотное тестирование работает с помощью chromatic — https://storybook.js.org/docs/writing-tests/visual-testing
- При запуске Storybook вы увидите новую дополнительную панель для визуальных тестов, где вы можете запускать тесты и просматривать результаты.
- Чтобы включить визуальное тестирование, зарегистрируйтесь в Chromatic и создайте проект. Это даст вам доступ к парку облачных браузеров.
- Выберите проект из списка проектов, чтобы завершить настройку. Если вы настраиваете дополнение впервые, файлы конфигурации и необходимые идентификаторы проектов будут добавлены для вас автоматически
- Нажмите кнопку ▶️ Play на боковой панели Storybook, чтобы запустить визуальные тесты. Это отправит ваши истории в облако для создания снимков и обнаружения визуальных изменений.
