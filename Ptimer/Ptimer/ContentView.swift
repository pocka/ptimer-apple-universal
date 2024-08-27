// SPDX-FileCopyrightText: 2024 Shota FUJI <pockawoooh@gmail.com>
//
// SPDX-License-Identifier: Apache-2.0

import SwiftUI

struct ContentView: View {
    @State var pickedFile: Ptimer? = nil
    @State var isValidFilePicked = false

    var body: some View {
        if let ptimer = pickedFile {
            PlayerView(ptimer: ptimer)
        } else {
            FilePickerView(pickedFile: $pickedFile)
        }
    }
}

#Preview {
    ContentView()
}
