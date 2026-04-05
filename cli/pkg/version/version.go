// Package version holds the build-time version for owc.
// Override at link time:
//
//	go build -ldflags="-X github.com/OctalMesh/OctalWeb-Console/cli/pkg/version.Version=1.0.0" .
package version

// Version is the SemVer string for this binary. Defaults to "dev".
var Version = "dev"
