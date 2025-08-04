
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code } from "@/components/ui/code";

const techStacks = {
  nodejs: {
    name: "Node.js",
    overview: "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling JavaScript to run on the server side.",
    features: [
      "Asynchronous & Event-driven",
      "Fast execution (V8 Engine)",
      "NPM ecosystem",
      "File system & network APIs"
    ],
    examples: [
      {
        title: "Create a Simple Web Server",
        code: `const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello, Node.js!');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running at http://localhost:3000/');\n});`,
        description: "Creates an HTTP server that responds with \"Hello, Node.js!\" on port 3000."
      },
      {
        title: "Reading a File Asynchronously",
        code: `const fs = require('fs');\n\nfs.readFile('example.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});`,
        description: "Reads the contents of example.txt asynchronously and prints them."
      }
    ]
  },
  react: {
    name: "React",
    overview: "React is a JavaScript library for building user interfaces.",
    features: ["Component-based architecture", "Hooks for state & lifecycle", "JSX syntax", "Virtual DOM for performance"],
    examples: [
      {
        title: "Functional Component with State",
        code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}`,
        description: "A simple counter using React Hooks."
      }
    ]
  },
  typescript: {
    name: "TypeScript",
    overview: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    features: ["Optional static typing", "Interfaces & generics", "Better tooling with editors", "Compile-time error checking"],
    examples: [
      {
        title: "Interface Example",
        code: `interface User {\n  name: string;\n  age: number;\n}\n\nconst greet = (user: User) => {\n  return `Hello, ${user.name}`;\n};`,
        description: "Defines a User interface and uses it in a function."
      }
    ]
  },
  java: {
    name: "Java",
    overview: "Java is a high-level, object-oriented programming language used for building cross-platform applications.",
    features: ["Object-Oriented Programming", "Platform Independence via JVM", "Strong memory management", "Multithreading support"],
    examples: [
      {
        title: "Hello World",
        code: `public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, Java!\");\n  }\n}`,
        description: "A basic Java program that prints a message."
      }
    ]
  },
  rust: {
    name: "Rust",
    overview: "Rust is a systems programming language focused on safety and performance.",
    features: ["Memory safety without GC", "Ownership model", "Concurrency support", "Fast and efficient"],
    examples: [
      {
        title: "Hello World",
        code: `fn main() {\n  println!(\"Hello, Rust!\");\n}`,
        description: "A simple Rust program that prints a message."
      }
    ]
  },
  cpp: {
    name: "C++",
    overview: "C++ is a general-purpose programming language created as an extension of the C programming language.",
    features: ["Object-oriented", "Memory management", "Performance critical applications", "Standard Template Library (STL)"],
    examples: [
      {
        title: "Hello World",
        code: `#include <iostream>\n\nint main() {\n  std::cout << \"Hello, C++!\" << std::endl;\n  return 0;\n}`,
        description: "Basic C++ program printing a message."
      }
    ]
  },
  csharp: {
    name: "C#",
    overview: "C# is a modern, object-oriented language developed by Microsoft for building a variety of applications on the .NET platform.",
    features: ["Component-oriented", ".NET Framework support", "LINQ and async features", "Strong IDE tooling with Visual Studio"],
    examples: [
      {
        title: "Hello World",
        code: `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine(\"Hello, C#!\");\n  }\n}`,
        description: "Simple C# program that prints a greeting."
      }
    ]
  }
};

export default function DocsPage() {
  const [current, setCurrent] = useState("nodejs");

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Tech Stack Documentation</h1>

      <Tabs defaultValue="nodejs" onValueChange={setCurrent}>
        <TabsList className="mb-6">
          {Object.keys(techStacks).map((key) => (
            <TabsTrigger key={key} value={key}>
              {techStacks[key].name}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(techStacks).map((key) => (
          <TabsContent key={key} value={key}>
            <Card className="mb-4">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                <p>{techStacks[key].overview}</p>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc pl-6">
                  {techStacks[key].features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-semibold mb-2">Examples</h2>
            {techStacks[key].examples.map((example, idx) => (
              <Card key={idx} className="mb-4">
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <Code>{example.code}</Code>
                  <p className="mt-2 text-sm text-gray-600">💡 {example.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
