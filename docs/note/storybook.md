## setup storybook

1. write a `.stories.js` , `.storie.ts`  file


```ts
import {Meta,StoryObj} from "storybook/vue3"
import YourComponent from "yourComponent.vue"


```

### basic structure

add `autodocs` in your meta object.
```ts
const meta:Meta = {
	title:'',
	component:'',
	tags:['autodocs'],
	argTypes:{},
	args:{}
}
```

it will  create Docs that describe this component's setting, includes props...etc


### add props column


## render component style

### with tailwindCSS

###  with sass


## bundle 
the story file is for development-only, it wont be included in your production bundle.


## args

args 可以分為三種：
1. 全域的
2. 元件的
3. ==story 本身的==


### story 層級

也就是針對單一故事元件去定義
```ts
import {Meta,StoryObj} from "@storybook/vue3"

import Button from "./Button.vue"

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
```
等於是這個 args 只適用於 Primary 這個元件的，你可以透過解構來進行復用

```ts
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const PrimaryLongName: Story = {
  args: {
    ...Primary.args, //args 是透過解構 primary 取得
    label: 'Primary with a really long name',
  },
};
```

### 元件層級
當你要展示多個帶有相同 *args* 的元件時，可以將 *args* 的定義寫入 *meta* 中
```ts
const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    primary: true, //這樣全部 Button 都會有同樣的 args 設定
  },
};

export default meta;
```



### 全域層級
當你希望所有元件都有此 *args* 時，將 *args* 設定寫在 preview 這個物件內

```ts
//.storybook/preview.ts
import { Preview } from '@storybook/your-renderer';

const preview: Preview = {
  // The default value of the theme arg for all stories
  args: { theme: 'light' },
};

export default preview;
```

### 當除了共用設定


---

### 
