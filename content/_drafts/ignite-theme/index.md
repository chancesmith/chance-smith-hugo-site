---
layout: post
title: "Ignite with Multiple Theme Switching"
date: "2022-05-23T08Z"
tags: development
---

  

As we work with ReactNative, the Ignite boilerplate helps us get started quickly. The speed comes from having a lot of decisions made for you. As long you are willing to put in some time to learn the new setup and bend it to your needs, you'll reap a lot of the any boilerplate.

Cory House says to codify you tooling and process. Inifinite Red has helped do exactly that. We see the Infinite Red team making intentional decisions on how they perefer to spin up and work with ReactNative/Expo project. We try to disect how came to such conclusions.

- What is this Mobx?
- What will Mobx help us achieve?
- Would we setup Reactotron differently?
- Why did IR setup themes this way?
- What would IR put in Mobx state?
- Wow, multi-lingual is already setup?
- Why did they not add ReactQuery or Formik?

Asking these questions was the fun part. Some smart people that build many project a year intended to end with the boilerplate shaped this way. This boilerplate is popular and solved many problems for IR. Our bet was we could use it and at the very least learn from it.

Late last year, we brought up a question, *How would IR handle multiple themes using the Ignite setup?*

Jamon, co-founder of IF, was kind enough put some thought into it and give us feedback on our approach.

We're hoping that this gives a way and ideas for others wanting to approach multiple themes with Ignite and other React Native apps.

## The Project
We'll build a simple app that has the ability to change the theme. Let's do this.

## The Themes
We divided the themes up into multiple files, but in the end they become a dictionary of themes.

First, the different themes, but with similar properties.

```ts
const themeLight = {backgroundColor: 'white'}
const themeDark = {backgroundColor: '#050505'}
const themeStPatty = {backgroundColor: 'green'}
```

Then, the themes come together in a dictionary.

```ts
const themes = {
	light: themeLight,
	dark: {...themeLight, ...themeDark},
	stPatty: {...themeLight, ...themeStPatty}
}
```

You see that the default light theme is combined with other themes so that all default properties will still exist.

## Setup a ThemeProvider
First we make a React context to hold the theme state for the whole app.

```ts
export const ThemeContext = React.createContext({ theme: themes.light, selectTheme: () => null, themeName: 'light' });
```

The default theme is `light`.

We'll then create a function we'll use to access the context state later.

```ts
export const useTheme = () => React.useContext(ThemeContext);
```

Lastly, in a ThemeProvider, we setup context to know which theme to show the user and allow the user to pick any theme they prefer.

```ts
export const ThemeProvider = ({ children }) => {
const [themeName, setTheme] = React.useState<keyof typeof themes>('light');
const selectTheme = (selectedThemeName) => setTheme(selectedThemeName);
const theme = themes[themeName];
const value = { theme, selectTheme, themeName };
// ...
};
```

Let's bring it all together. This is basically the whole provider.

```ts
export const ThemeContext = React.createContext({ theme: themes.light, toggleTheme: () => null, themeName: 'light' });

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

const [themeName, setTheme] = React.useState<keyof typeof themes>('light');

const selectTheme = (selectedThemeName) => setTheme(selectedThemeName);

const theme = themes[themeName];

const value = { theme, selectTheme, themeName };
	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};
```

In `app.tsx` we wrap our app with the provider so every child component can reach for the theme state.

```tsx
<RootStoreProvider value={rootStore}>
	<ThemeProvider>
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<ErrorBoundary catchErrors={"always"}>
				<AppNavigator
					initialState={initialNavigationState}
					onStateChange={(state) => onNavigationStateChange(state, rootStore)}
				/>
			</ErrorBoundary>
		</SafeAreaProvider>
	</ThemeProvider>
</RootStoreProvider>
```

## Use the theme

With a little context state, we can reach for the current theme and apply to any style.

With Ignite, the default styles are setup with plain objects. There is no styled-components or any other dependency.

```tsx
import {spacing, color} from '../../theme'

const LOADER_SCREEN: ViewStyle = {
	flex: 1,
	margin: spacing[2],
	backgroundColor: color.background,
	justifyContent: "center",
}
```

We had to shift a little and turn them functions with a theme paramater and that returned an object.

```tsx
const LOADER_SCREEN: VStyle = ({ spacing, color }) => ({
	flex: 1,
	margin: spacing[2],
	backgroundColor: color.background,
	justifyContent: "center",
})
```

The `VStyle` is a type we created to setup the function we needed for all the theming. We did the same for `ViewStyle`, `TextStyle`, and `ImageStyle`.

```ts
export type TStyle = (theme: Theme) => TextStyle
export type VStyle = (theme: Theme) => ViewStyle
export type IStyle = (theme: Theme) => ImageStyle
```

Now, to use the theme with a style prop would look like this.

```tsx
return (<View style={LOADER_SCREEN(theme)}>{...}</View>)
```

Here is an example of a whole component.

```tsx
const LOADER_SCREEN: VStyle = ({ spacing, color }) => ({
	flex: 1,
	margin: spacing[2],
	backgroundColor: color.background,
	justifyContent: "center",
})

export interface LoadingAbsoluteProps {
	tx?: TxKeyPath
}

export const LoadingAbsolute = (props: LoadingAbsoluteProps) => {
	const { theme } = useTheme()

	return (
		<View style={LOADER_SCREEN(theme)}>
			<ActivityIndicator size="large" color={theme.color.text} />
			<Text center tx={props.tx} />
		</View>
	)
}
```

## Conclusion
...