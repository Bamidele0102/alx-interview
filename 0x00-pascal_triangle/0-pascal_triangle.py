#!/usr/bin/python3
def pascal_triangle(n):
    """
    This function generates Pascal's triangle up to n rows.

    Args:
        n: An integer representing the number of rows.

    Returns:
        A list of lists containing the elements of Pascal's triangle.
        Returns an empty list if n <= 0.
    """

    # Check for invalid input (n <= 0)
    if n <= 0:
        return []

    # Initialize the triangle with the first row
    triangle = [[1]]

    # Loop through remaining rows (1 to n-1)
    for i in range(1, n):
        # Create a new row list
        new_row = [1] * (i + 1)

        # Iterate through the previous row to calculate elements
        for j in range(1, i):
            # Element at position j is the sum of elements above it
            new_row[j] = triangle[i-1][j-1] + triangle[i-1][j]
        triangle.append(new_row)

    return triangle