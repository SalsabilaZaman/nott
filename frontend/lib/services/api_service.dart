import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  // Replace with your machine's IP if using Android emulator
  // For Android emulator: 10.0.2.2
  // For iOS simulator: localhost
  // For physical device: your machine's IP (e.g., 192.168.1.x)
  static const String baseUrl = 'http://10.0.2.2:3000';

  static Future<List<dynamic>> getNotes() async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/notes'),
      ).timeout(const Duration(seconds: 10));

      if (response.statusCode == 200) {
        return List<dynamic>.from(json.decode(response.body));
      } else {
        throw Exception('Failed to load notes: ${response.statusCode}');
      }
    } catch (e) {
      throw Exception('Error connecting to server: $e');
    }
  }

  static Future<void> addNote(String text) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/notes'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'text': text}),
      ).timeout(const Duration(seconds: 10));

      if (response.statusCode != 201) {
        throw Exception('Failed to add note: ${response.statusCode}');
      }
    } catch (e) {
      throw Exception('Error adding note: $e');
    }
  }

  static Future<void> deleteNote(String id) async {
    try {
      final response = await http.delete(
        Uri.parse('$baseUrl/notes/$id'),
      ).timeout(const Duration(seconds: 10));

      if (response.statusCode != 200) {
        throw Exception('Failed to delete note: ${response.statusCode}');
      }
    } catch (e) {
      throw Exception('Error deleting note: $e');
    }
  }
}
