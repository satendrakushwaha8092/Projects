1.5 What is an Algorithm?

Let us consider the problem of preparing an omelette. To prepare an omelette, we follow the
steps given below:
1) Get the frying pan.
2) Get the oil.
    a. Do we have oil?
        i. If yes, put it in the pan.
        ii. If no, do we want to buy oil?
                1. If yes, then go out and buy.
                2. If no, we can terminate.
3) Turn on the stove, etc...

What we are doing is, for a given problem (preparing an omelette), we are providing a step-bystep procedure for solving it. The formal definition of an algorithm can be stated as:

An algorithm is the step-by-step unambiguous instructions to solve a given problem.
____________________________________________________________________________________

In the traditional study of algorithms, there are two main criteria for judging the merits of
algorithms: correctness (does the algorithm give solution to the problem in a finite number of
steps?) and efficiency (how much resources (in terms of memory and time) does it take to execute
the).
Note: We do not have to prove each step of the algorithm.


1.6 Why the Analysis of Algorithms?

To go from city “A” to city “B”, there can be many ways of accomplishing this: by flight, by bus,
by train and also by bicycle. Depending on the availability and convenience, we choose the one
that suits us. Similarly, in computer science, multiple algorithms are available for solving the
same problem (for example, a sorting problem has many algorithms, like insertion sort, selection
sort, quick sort and many more). Algorithm analysis helps us to determine which algorithm is
most efficient in terms of time and space consumed.

1.7 Goal of the Analysis of Algorithms

The goal of the analysis of algorithms is to compare algorithms (or solutions) mainly in terms of
running time but also in terms of other factors (e.g., memory, developer effort, etc.)

1.8 What is Running Time Analysis?

It is the process of determining how processing time increases as the size of the problem (input
size) increases. Input size is the number of elements in the input, and depending on the problem
type, the input may be of different types. The following are the common types of inputs.
• Size of an array
• Polynomial degree
• Number of elements in a matrix
• Number of bits in the binary representation of the input
• Vertices and edges in a graph.

1.9 How to Compare Algorithms

To compare algorithms, let us define a few objective measures:

Execution times? Not a good measure as execution times are specific to a particular computer.
Number of statements executed? Not a good measure, since the number of statements varies
with the programming language as well as the style of the individual programmer.

Ideal solution? Let us assume that we express the running time of a given algorithm as a function
of the input size n (i.e., f(n)) and compare these different functions corresponding to running

times. This kind of comparison is independent of machine time, programming style, etc.

1.10 What is Rate of Growth?

The rate at which the running time increases as a function of input is called rate of growth. Let us
assume that you go to a shop to buy a car and a bicycle. If your friend sees you there and asks
what you are buying, then in general you say buying a car. This is because the cost of the car is
high compared to the cost of the bicycle (approximating the cost of the bicycle to the cost of the
car).

1.12 Types of Analysis

To analyze the given algorithm, we need to know with which inputs the algorithm takes less time
(performing wel1) and with which inputs the algorithm takes a long time. We have already seen
that an algorithm can be represented in the form of an expression. That means we represent the
algorithm with multiple expressions: one for the case where it takes less time and another for the
case where it takes more time.
In general, the first case is called the best case and the second case is called the worst case for
the algorithm. To analyze an algorithm we need some kind of syntax, and that forms the base for
asymptotic analysis/notation. There are three types of analysis:

• Worst case

○ Defines the input for which the algorithm takes a long time (slowest
time to complete).
○ Input is the one for which the algorithm runs the slowest.

• Best case

○ Defines the input for which the algorithm takes the least time (fastest
time to complete).
○ Input is the one for which the algorithm runs the fastest.

• Average case

○ Provides a prediction about the running time of the algorithm.
○ Run the algorithm many times, using many different inputs that come
from some distribution that generates these inputs, compute the total
running time (by adding the individual times), and divide by the
number of trials.
○ Assumes that the input is random.

Lower Bound <= Average Time <= Upper Bound

1.14 Big-O Notation [Upper Bounding Function]

This notation gives the tight upper bound of the given function. Generally, it is represented as f(n)
= O(g(n)). That means, at larger values of n, the upper bound of f(n) is g(n). For example, if f(n)
= n^4 + 100n^2 + 10n + 50 is the given algorithm, then n^4 is g(n).

1.15 Omega-Q Notation [Lower Bounding Function]

Similar to the O discussion, this notation gives the tighter lower bound of the given algorithm and
we represent it as f(n) = Ω(g(n)). That means, at larger values of n, the tighter lower bound of
f(n) is g(n). For example, if f(n) = 100n^2 + 10n + 50, g(n) is Ω(n^2).

1.16 Theta-Θ Notation [Order Function]

This notation decides whether the upper and lower bounds of a given function (algorithm) are the
same. The average running time of an algorithm is always between the lower bound and the upper
bound. If the upper bound (O) and lower bound (Ω) give the same result, then the Θ notation will
also have the same rate of growth.

As an example, let us assume that f(n) = 10n + n is the expression. Then, its tight upper bound
g(n) is O(n). The rate of growth in the best case is g(n) = O(n).

In this case, the rates of growth in the best case and worst case are the same. As a result, the
average case will also be the same. For a given function (algorithm), if the rates of growth
(bounds) for O and Ω are not the same, then the rate of growth for the Θ case may not be the same.
In this case, we need to consider all possible time complexities and take the average of those (for
example, for a quick sort average case, refer to the Sorting chapter).