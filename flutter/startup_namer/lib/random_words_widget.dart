import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

/// Stateful widget that generates and creates random words
class RandomWordsWidget extends StatefulWidget {
  /// Default constructor
  const RandomWordsWidget({super.key});

  /// Create the state of the widget
  @override
  State<RandomWordsWidget> createState() => _RandomWordsWidgetState();
}

/// The associated state of the widget
/// Classes, methods and attributes which start with a "_" are private
class _RandomWordsWidgetState extends State<RandomWordsWidget> {
  final _suggestions = <WordPair>[];
  final _favoriteWordPairs = <WordPair>[];
  final _biggerFont = const TextStyle(fontSize: 18);

  void _tapCallback(bool isMarkedAsFavorite, WordPair currentWordPair) {
    if (isMarkedAsFavorite) {
      setState(() {
        _favoriteWordPairs.remove(currentWordPair);
      });
    } else {
      setState(
        () {
          _favoriteWordPairs.add(currentWordPair);
        },
      );
    }
  }

  Widget _createItemBuilder(BuildContext context, int idx) {
    if (idx.isOdd) return const Divider();

    final index = idx ~/ 2;
    if (index >= _suggestions.length) {
      _suggestions.addAll(generateWordPairs().take(10));
    }

    final isMarkedAsFavorite = _favoriteWordPairs.contains(_suggestions[index]);

    return ListTile(
        title: Text(
          _suggestions[index].asPascalCase,
          style: _biggerFont,
        ),
        trailing: Icon(
          isMarkedAsFavorite ? Icons.favorite : Icons.favorite_border_outlined,
          color: isMarkedAsFavorite ? Colors.red : Colors.black,
          semanticLabel:
              isMarkedAsFavorite ? 'Remove from favorites' : 'Mark as favorite',
        ),
        onTap: () => _tapCallback(isMarkedAsFavorite, _suggestions[index]));
  }

  /// In case of stateful widgets it is the state that seems to return the actual widget setup
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      padding: const EdgeInsets.all(16.0),
      itemBuilder: (BuildContext context, int idx) =>
          _createItemBuilder(context, idx),
    );
  }
}
