import 'package:flutter/material.dart';
import 'package:startup_namer/random_words_widget.dart';

class RandomWordGeneratorMainWidget extends StatelessWidget {
  /// Default constructor
  const RandomWordGeneratorMainWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      /// It's like the title bar of the app acc. to Material Design
      /// Holds a text
      appBar: AppBar(
        title: const Text('Welcome to Flutter'),
        backgroundColor: Colors.green,
      ),
      body: const RandomWordsWidget(),
    );
  }
}
