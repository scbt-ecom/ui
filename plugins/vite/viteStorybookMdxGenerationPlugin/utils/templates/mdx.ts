/**
 * Шаблон рендерит каждую историю из файла `*.stories.(ts|tsx)`
 *
 * @param component имя компонента
 * @param filepath путь до `*.stories.(ts|tsx)`
 * @param stories список историй `{ name: string, description?: string }`
 */
export const mdxTemplate = `
import { Meta, Canvas, Controls, Markdown } from "@storybook/blocks";
import * as <%= component %>Stories from "<%= filepath %>";

# <%= component %>

<Meta of={<%= component %>Stories} />
<% stories.forEach(function(story) { %>
## <%= component %> <%= story.name %>
<% if(story.description) { %>
<Markdown>
{\`
  <%= story.description %>
\`}
</Markdown>
<% } %>
<Canvas of={<%= component %>Stories.<%= story.name %>} meta={<%= component %>Stories} />
<Controls of={<%= component %>Stories.<%= story.name %>} />
<% }); %>
`.trim()
