import 'package:flutter/material.dart';
import 'package:startup_namer/random_word_generator_main_widget.dart';

/// This is the entry point to our flutter app.
void main() {
  runApp(const RandomWordGeneratorApp());
}

/// This  is the main class of the app
class RandomWordGeneratorApp extends StatelessWidget {
  /// This is the default constructor
  const RandomWordGeneratorApp({super.key});

  /// The build method seems to correspond to calling "draw()" in other frameworks.
  /// It re-renders everything and updates the UI. Apparently it is very efficient.
  /// The benefit of this is you don't have to care about updating individual widgets...
  /// You just declare heare what you want and bind it to state if necessary. You can then update state
  /// and flutter takes care of the rest... really nice.
  @override
  Widget build(BuildContext context) {
    /// Currently flutter supports two fully defined design languages Material Design and Cupertino
    /// A design language defines how certaini types of UI interactions (or problems) are being resolved
    /// I.e. the user can learn the design language and they will understand how almost any app talking the same
    /// language works. E.g. they will know when to swipe, press, zoom or where to look to find the app configuration
    /// You can however also you raw UI elements in flutter and try to customize them acc. to your liking.
    /// This will require some experience though.
    return const MaterialApp(
      title: 'Welcome to Flutter',
      home: RandomWordGeneratorMainWidget(),
    );
  }
}
